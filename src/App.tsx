import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { About } from "./components/About/About";
import CardsWithPremiumComponent from "./components/Cards/Cards";
import Cart from "./components/cart/Cart";
import { Login } from "./components/Authentication/Login/Login";
import { Register } from "./components/Authentication/Register/Register";
import PathChecker from "./PathChecker";
import Contacts from "./components/Contacts/Contacts";
import Cards from "./components/Cards/Cards";
import CartsPage from "./components/Cards/CardsPage";

// const
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PathChecker />,
    children: [
      {
        index: true, // This defines the index route
        element: <CartsPage />, // Component to render at the base path
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
  {
    path: "/contacts",
    element: <Contacts />,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
