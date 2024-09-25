import { useState } from "react";

import { Menu } from "./menu";
import { ShiftContainer } from "./shift-container";
import { CreateShift } from "./create-shift";

const Shfits: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("shifts");

  const handleChangePage = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">shift-management</h1>
      <Menu handleChangePage={handleChangePage} selectedMenu={selectedMenu} />
      <div className="flex w-[90%] justify-center">
        {selectedMenu === "shifts" && <ShiftContainer />}
        {selectedMenu === "creating" && (
          <CreateShift handleChangePage={handleChangePage as () => void} />
        )}
      </div>
    </div>
  );
};

export { Shfits };
