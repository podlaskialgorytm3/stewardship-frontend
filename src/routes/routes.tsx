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
import { SkillPage } from "../pages/dashboard/group/schedule/skills";
import { ScheduleRulePage } from "../pages/dashboard/group/schedule/schedule-rules";
import { ShiftPage } from "../pages/dashboard/group/schedule/shifts";
import { EmploymentTypePage } from "../pages/dashboard/group/schedule/employment-types";
import { WorkSchedulePage } from "../pages/dashboard/group/schedule/work-schedules";
import { PositionPage } from "../pages/dashboard/group/schedule/positions";
import { PreferencesPage } from "../pages/dashboard/group/user-preferences/preferences";
import { UnavialableDaysPage } from "../pages/dashboard/group/user-preferences/unavialable-days";

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
          {
            path: "/dashboard/groups",
            element: <GroupsPage />,
          },
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
          { path: "/dashboard/groups/skills/:id", element: <SkillPage /> },
          {
            path: "/dashboard/groups/schedule-rules/:id",
            element: <ScheduleRulePage />,
          },
          { path: "/dashboard/groups/shifts/:id", element: <ShiftPage /> },
          {
            path: "/dashboard/groups/employment-types/:id",
            element: <EmploymentTypePage />,
          },
          {
            path: "/dashboard/groups/work-schedules/:id",
            element: <WorkSchedulePage />,
          },
          {
            path: "/dashboard/groups/positions/:id",
            element: <PositionPage />,
          },
          {
            path: "/dashboard/groups/preferences/:id",
            element: <PreferencesPage />,
          },
          {
            path: "/dashboard/groups/unavialable-days/:id",
            element: <UnavialableDaysPage />,
          },
        ],
      },
    ],
  },
]);
