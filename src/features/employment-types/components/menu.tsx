const Menu: React.FC<{
  handleChangePage: (menu: string) => void;
  selectedMenu: string;
}> = ({ handleChangePage, selectedMenu }) => {
  return (
    <div className=" flex justify-center items-center mt-5">
      <div
        className={`mr-5 w-[200px] h-[40px] rounded-lg text-white text-sm text-center leading-[40px] cursor-pointer hover:bg-ligth  ${
          selectedMenu === "employment-types" ? "bg-dark" : "bg-primary"
        }`}
        onClick={() => handleChangePage("employment-types")}
      >
        employment-types
      </div>
      <div
        className={`mr-5 w-[200px] h-[40px] rounded-lg text-white text-sm text-center leading-[40px] cursor-pointer hover:bg-ligth ${
          selectedMenu === "creating" ? "bg-dark" : "bg-primary"
        }`}
        onClick={() => handleChangePage("creating")}
      >
        creating
      </div>
    </div>
  );
};

export { Menu };
