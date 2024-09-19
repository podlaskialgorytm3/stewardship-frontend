export const BoxElement: React.FC<{
  children: React.ReactNode;
  size: number;
}> = ({ children, size }) => {
  return (
    <div
      className={`border-primary border-[2px] text-primary rounded-xl p-6 shadow-md relative w-[${size}px] m-3 flex justify-center items-center flex-col`}
    >
      {children}
    </div>
  );
};
