import { ScheduleNavLink } from "./schedule-nav-link";

export const ScheduleManagement: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  return (
    <>
      <h1 className="font-bold text-xl mb-5">schedule-management</h1>
      <ScheduleNavLink
        path={`/dashboard/groups/skills/${groupId}`}
        name="Skills"
      />
      <ScheduleNavLink
        path={`/dashboard/groups/schedule-rules/${groupId}`}
        name="Schedule Rules"
      />
      <ScheduleNavLink
        path={`/dashboard/groups/shifts/${groupId}`}
        name="Shifts"
      />
      <ScheduleNavLink
        path={`/dashboard/groups/employment-types/${groupId}`}
        name="Employment Types"
      />
      <ScheduleNavLink
        path={`/dashboard/groups/work-schedules/${groupId}`}
        name="Work Schedules"
      />
    </>
  );
};
