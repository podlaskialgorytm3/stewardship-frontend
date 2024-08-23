export const TaskCard: React.FC = () => {
  return (
    <div className="mt-5 w-[90%] h-[120px] border-primary border-[2px] border-solid rounded-lg flex flex-col items-center justify-center">
      <div>
        <h1 className="text-xl font-bold mt-2">task-name</h1>
        <p className="text-md">group-of-task</p>
      </div>
      <button className="bg-primary text-white p-2 rounded-md mt-2 mb-2">
        view-task
      </button>
    </div>
  );
};
