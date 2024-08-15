import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import NewEx from "./components/NewEx/NewEx";
import { About } from "./components/About/About";
import Cards from "./components/Cards/Cards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This defines the index route
        element: <Cards />, // Component to render at the base path
      },
      {
        path: "/cart",
        element: <NewEx />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
