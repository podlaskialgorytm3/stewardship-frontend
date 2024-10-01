import { useState } from "react";

import { Menu } from "./menu";
import { EmploymentTypesContainer } from "./employment-types-container";
import { CreateEmploymentType } from "./create-employment-type";

const EmploymentTypes: React.FC<{}> = () => {
  const [selectedPage, setSelectedPage] = useState<string>("employment-types");

  const handleChangePage = (menu: string) => {
    setSelectedPage(menu);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">employment-types-management</h1>
      <Menu handleChangePage={handleChangePage} selectedMenu={selectedPage} />
      <div className="flex w-[90%] justify-center">
        {selectedPage === "employment-types" && <EmploymentTypesContainer />}
        {selectedPage === "creating" && <CreateEmploymentType />}
      </div>
    </div>
  );
};

export { EmploymentTypes };
