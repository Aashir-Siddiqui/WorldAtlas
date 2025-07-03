import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Country from "./components/pages/Country";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/country", element: <Country /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);

  return <RouterProvider router={router} />
}

export default App;