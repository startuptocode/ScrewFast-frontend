import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import { ClerkProvider } from "@clerk/clerk-react";
import { routes } from "./utils/menuUtils";
import Home from "./pages/home";
import QueryProvider from "./components/queryProvider";

const PUBLISHABLE_KEY =
  "pk_test_Y29uY2lzZS1wYXJha2VldC01MS5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...routes
        .filter((item) => item.element !== null && item.key !== "home")
        .map((item) => ({
          path: item.href.split("/app/")[1],
          element: item.element,
        })),
    ],
  },
]);

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
};

export default Root;
