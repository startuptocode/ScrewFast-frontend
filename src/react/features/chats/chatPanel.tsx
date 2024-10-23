import React from 'react';

const ChatPanel = () => {
  return (
    <div className="h-screen w-full bg-gray-50 p-4">
      <div className="grid h-full grid-cols-12 gap-4">
        {/* Left Panel - WhatsApp Chat & AI Summary */}
        <div className="col-span-8 grid grid-rows-[70%,30%] gap-4">
          {/* WhatsApp Chat Section */}
          <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">WhatsApp Chat</h2>
            </div>
            <div className="h-[calc(100%-4rem)] overflow-y-auto p-4">
              {/* Sample Messages */}
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-100 p-3">
                  Sample message content
                </div>
                <div className="rounded-lg bg-gray-100 p-3">
                  Another message
                </div>
              </div>
            </div>
          </div>

          {/* AI Summary Section */}
          <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">AI Summary</h2>
            </div>
            <div className="h-[calc(100%-4rem)] overflow-y-auto p-4">
              <p className="text-gray-600">
                AI generated summary of the conversation...
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Notes, Funnel, History */}
        <div className="col-span-4 grid grid-rows-[30%,30%,40%] gap-4">
          {/* Notes Section */}
          <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">Notes</h2>
            </div>
            <div className="p-4">
              <textarea 
                className="h-[calc(100%-1rem)] w-full resize-none rounded border p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="Add your notes here..."
              />
            </div>
          </div>

          {/* Funnel State Section */}
          <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">Funnel State</h2>
            </div>
            <div className="p-4">
              <div className="rounded-lg bg-gray-50 p-3">
                Current funnel stage: Lead
              </div>
            </div>
          </div>

          {/* Chat History Section */}
          <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">Chat History</h2>
            </div>
            <div className="h-[calc(100%-4rem)] overflow-y-auto p-4">
              <div className="space-y-3">
                <div className="rounded-lg bg-gray-50 p-3">
                  <h3 className="font-medium">Previous conversation 1</h3>
                  <p className="text-sm text-gray-600">Last message: 2 days ago</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <h3 className="font-medium">Previous conversation 2</h3>
                  <p className="text-sm text-gray-600">Last message: 5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;