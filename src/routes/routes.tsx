import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home/index";
import { Root } from "../pages/root/index";
import { LoginPage } from "../pages/login/index";
import { RegisterPage } from "../pages/register/index";
import { ForgorPasswordPage } from "../pages/forgot-password";
import { ResetPasswordPage } from "../pages/reset-password";
import { ProfilePage } from "../pages/profile";
import { DashboardPage } from "../pages/dashboard";
import { GroupsPage } from "../pages/dashboard/groups/index";
import { GroupPage } from "../pages/dashboard/group/index";
import { CreateGroupPage } from "../pages/dashboard/create-group/index";
import { EditGroupPage } from "../pages/dashboard/group/edit-group";
import { CreateTaskPage } from "../pages/dashboard/group/create-task";
import { TaskPage } from "../pages/dashboard/group/task/index";
import { WorkingSchedulePage } from "../pages/dashboard/working-scheudule";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forgot-password", element: <ForgorPasswordPage /> },
      { path: "/reset-password/:token", element: <ResetPasswordPage /> },
      { path: "/profile", element: <ProfilePage /> },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          { path: "/dashboard/groups", element: <GroupsPage /> },
          { path: "/dashboard/groups/:id", element: <GroupPage /> },
          {
            path: "/dashboard/groups/edit-group/:id",
            element: <EditGroupPage />,
          },
          {
            path: "/dashboard/groups/create-task/:id",
            element: <CreateTaskPage />,
          },
          { path: "/dashboard/create-group", element: <CreateGroupPage /> },
          { path: "/dashboard/task/:id", element: <TaskPage /> },
          {
            path: "/dashboard/working-schedule",
            element: <WorkingSchedulePage />,
          },
        ],
      },
    ],
  },
]);
