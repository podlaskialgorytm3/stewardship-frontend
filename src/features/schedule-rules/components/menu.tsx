const Menu: React.FC<{
  handleChangePage: (menu: string) => void;
  selectedMenu: string;
}> = ({ handleChangePage, selectedMenu }) => {
  return (
    <div className=" flex justify-center items-center mt-5">
      <div
        className={`mr-5 w-[150px] h-[50px] rounded-lg text-white text-md text-center leading-[50px] cursor-pointer font-bold hover:bg-ligth ${
          selectedMenu === "rules" ? "bg-dark" : "bg-primary"
        }`}
        onClick={() => handleChangePage("rules")}
      >
        rules
      </div>
      <div
        className={`mr-5 w-[150px] h-[50px] rounded-lg text-white text-md text-center leading-[50px] cursor-pointer font-bold hover:bg-ligth ${
          selectedMenu === "creating" ? "bg-dark" : "bg-primary"
        }`}
        onClick={() => handleChangePage("creating")}
      >
        creating
      </div>
      <div
        className={`mr-5 w-[150px] h-[50px] rounded-lg text-white text-md text-center leading-[50px] cursor-pointer font-bold hover:bg-ligth ${
          selectedMenu === "members" ? "bg-dark" : "bg-primary"
        }`}
        onClick={() => handleChangePage("members")}
      >
        members
      </div>
    </div>
  );
};

export { Menu };
