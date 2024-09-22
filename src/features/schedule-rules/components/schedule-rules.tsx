import { ScheduleRuleContainer } from "./schedule-rule-container";

const ScheduleRules: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">schedule-rule-management</h1>
      <div className="flex w-[90%] justify-center">
        <ScheduleRuleContainer />
      </div>
    </div>
  );
};

export { ScheduleRules };
