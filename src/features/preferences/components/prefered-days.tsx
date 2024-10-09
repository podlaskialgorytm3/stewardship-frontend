const PreferedDays: React.FC<{ groupId: string | undefined }> = () => {
  return (
    <div
      className={`border-primary border-[2px] border-solid w-[350px] flex flex-col items-center rounded-lg m-5`}
    >
      <h1 className="font-bold text-xl mb-5 mt-5">prefered-days</h1>
    </div>
  );
};

export { PreferedDays };
