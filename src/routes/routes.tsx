import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home/index";
import RootPage from "../pages/root/index";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/register/index";
import ForgorPasswordPage from "../pages/forgot-password";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/login", element: <LoginPage />},
            {path: "/register", element: <RegisterPage />},
            {path: "/forgot-password", element: <ForgorPasswordPage />}
        ]
    }
])