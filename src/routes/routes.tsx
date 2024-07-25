import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home/index";
import RootPage from "../pages/root/index";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/register/index";
import ForgorPasswordPage from "../pages/forgot-password";
import ResetPasswordPage from "../pages/reset-password";
import ProfilePage from "../pages/profile";
import DashboardPage from "../pages/dashboard";
import GroupPage from "../pages/dashboard/groups/index"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/login", element: <LoginPage />},
            {path: "/register", element: <RegisterPage />},
            {path: "/forgot-password", element: <ForgorPasswordPage />},
            {path: "/reset-password/:token", element: <ResetPasswordPage />},
            {path: "/profile", element: <ProfilePage />},
            {path: "/dashboard", element: <DashboardPage />, children: [
                {path: "/dashboard/groups", element: <GroupPage />}
            ]}
        ]
    }
])