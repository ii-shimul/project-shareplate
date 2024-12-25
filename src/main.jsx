import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import "react-awesome-button/dist/styles.css";
import AuthProvider from "./provider/AuthProvider";
import Home from "./pages/Home";
import AvailableFoods from "./pages/AvailableFoods";
import AddFood from "./pages/AddFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manage-food",
        element: <h1>manage food</h1>,
      },
      {
        path: "/food-requests",
        element: <h1>food requests</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
