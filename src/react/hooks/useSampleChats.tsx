import { useState, useEffect, useCallback } from 'react';
import { ChatCategoryType, type ChatDTO, type PlatformId } from '../features/dtos/chatDtos';
import { FunnelState } from '../utils/mockDataUtils';


// Interfaces
interface RandomUser {
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
}

interface UseFunnelChatsOptions {
  initialCount?: number;
  autoLoad?: boolean;
  messagesPerChat?: number;
}

interface FunnelChat extends ChatDTO {
  state: FunnelState;
  stateColor: string;
}

// Funciones auxiliares para obtener mensajes de diferentes APIs
const fetchJokeMessage = async (): Promise<string> => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return `${data.setup} ${data.punchline}`;
  } catch {
    return "Failed to fetch joke";
  }
};

const fetchQuoteMessage = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data.content;
  } catch {
    return "Failed to fetch quote";
  }
};

const fetchAdviceMessage = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip.advice;
  } catch {
    return "Failed to fetch advice";
  }
};

// Hook principal
export const useFunnelChats = ({
  initialCount = 10,
  autoLoad = true,
  messagesPerChat = 3
}: UseFunnelChatsOptions = {}) => {
  const [chats, setChats] = useState<FunnelChat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getStateConfig = (index: number) => {
    const states = [
      { state: FunnelState.New, color: 'bg-blue-500' },
      { state: FunnelState.InProgress, color: 'bg-yellow-500' },
      { state: FunnelState.Completed, color: 'bg-green-500' }
    ];
    return states[index % states.length];
  };

  const generateMessages = async (count: number): Promise<string[]> => {
    const messagePromises = Array(count).fill(null).map(async (_, index) => {
      // Alternar entre diferentes tipos de mensajes
      switch (index % 3) {
        case 0:
          return await fetchJokeMessage();
        case 1:
          return await fetchQuoteMessage();
        case 2:
          return await fetchAdviceMessage();
        default:
          return await fetchQuoteMessage();
      }
    });

    return Promise.all(messagePromises);
  };

  const generateFunnelChats = useCallback(async (count: number): Promise<FunnelChat[]> => {
    try {
      // Obtener usuarios aleatorios
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await response.json();
      const users: RandomUser[] = data.results;

      const newChats: FunnelChat[] = [];

      for (let i = 0; i < count; i++) {
        const user = users[i] || {
          picture: { medium: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}` },
          name: { first: 'User', last: `${i + 1}` },
          phone: `+1234567${i.toString().padStart(3, "0")}`
        };

        const stateConfig = getStateConfig(i);
        const messages = await generateMessages(messagesPerChat);
        const platformId: PlatformId = ['whatsapp', 'messenger', 'instagram', 'telegram'][i % 4] as PlatformId;

        newChats.push({
          id: `chat${i}`,
          state: stateConfig.state,
          stateColor: stateConfig.color,
          messages: messages.map((message, msgIndex) => ({
            id: `msg${i}-${msgIndex}`,
            metadata: {
              chatId: `chat${i}`,
              hubId: `hub${i}`,
              platformId,
              senderName: `${user.name.first} ${user.name.last}`,
              senderPhoneNumber: user.phone,
              createdAt: new Date(
                Date.now() - (messagesPerChat - msgIndex) * 300000 - Math.random() * 300000
              ).toISOString(),
            },
            content: {
              type: "text",
              message,
            },
          })),
          metadata: {
            hubId: `hub${i}`,
            platformId,
            chatImageUrl: user.picture.medium,
            chatName: `${user.name.first} ${user.name.last}`,
            chatCategory: ChatCategoryType.Individual,
            createdAt: new Date(Date.now() - Math.random() * 2592000000).toISOString(),
          },
        });
      }

      return newChats.sort(
        (a, b) =>
          new Date(b.messages[0].metadata.createdAt).getTime() -
          new Date(a.messages[0].metadata.createdAt).getTime()
      );
    } catch (error) {
      throw new Error('Failed to generate funnel chats');
    }
  }, [messagesPerChat]);

  const loadChats = useCallback(async (count: number = initialCount) => {
    try {
      setLoading(true);
      setError(null);
      const newChats = await generateFunnelChats(count);
      setChats(newChats);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load chats'));
    } finally {
      setLoading(false);
    }
  }, [generateFunnelChats, initialCount]);

  const refreshChats = useCallback(() => {
    return loadChats(chats.length);
  }, [loadChats, chats.length]);

  useEffect(() => {
    if (autoLoad) {
      loadChats();
    }
  }, [autoLoad, loadChats]);

  return {
    chats,
    loading,
    error,
    refreshChats,
  };
};