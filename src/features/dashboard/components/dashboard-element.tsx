export const DashboardElement: React.FC<{
  title: string;
  width: number;
  children: React.ReactNode;
}> = ({ title, width, children }) => {
  return (
    <div className={`flex flex-col w-[${width}px] items-center ml-5`}>
      <h1 className="text-xl">{title}</h1>
      <div
        className={`border-primary  border-[2px] border-solid rounded-lg w-[100%] h-[400px] overflow-scroll flex flex-col items-center pb-4`}
      >
        {children}
      </div>
    </div>
  );
};
