import { useState } from "react";

const Shfits: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("shifts");

  const handleChangePage = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mt-10 text-3xl font-bold">shift-management</h1>
      <div className="flex w-[90%] justify-center"></div>
    </div>
  );
};

export { Shfits };
