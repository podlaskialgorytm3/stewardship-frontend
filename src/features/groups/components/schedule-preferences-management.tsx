import { ScheduleNavLink } from "./schedule-nav-link";

const SchedulePreferencesManagement: React.FC<{
  groupId: string | undefined;
}> = ({ groupId }) => {
  return (
    <>
      <h1 className="font-bold text-xl mb-5">schedule-preferences</h1>
      <ScheduleNavLink
        path={`/dashboard/groups/preferences/${groupId}`}
        name="Preferences"
      />
      <ScheduleNavLink
        path={`/dashboard/groups/unavialable-days/${groupId}`}
        name="Unavailable Days"
      />
    </>
  );
};

export { SchedulePreferencesManagement };
