import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { About } from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Cart from "./components/cart/Cart";
import { Login } from "./components/Authentication/Login/Login";
import { Register } from "./components/Authentication/Register/Register";

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
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
