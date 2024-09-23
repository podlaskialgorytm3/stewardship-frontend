import { useState } from "react";

import { ScheduleRuleContainer } from "./schedule-rule-container";
import { CreateScheduleRule } from "./create-schedule-rule";
import { Menu } from "./menu";

const ScheduleRules: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("rules");

  const handleChangePage = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">schedule-rule-management</h1>
      <Menu handleChangePage={handleChangePage} selectedMenu={selectedMenu} />
      <div className="flex w-[90%] justify-center">
        {selectedMenu === "rules" && <ScheduleRuleContainer />}
        {selectedMenu === "creating" && (
          <CreateScheduleRule
            handleChangePage={handleChangePage as () => void}
          />
        )}
      </div>
    </div>
  );
};

export { ScheduleRules };
