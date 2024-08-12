import { TaskCard } from './task-card'; 

export const TaskArea: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    return (
        <div className="w-[100%] flex flex-col items-center justify-start mt-5">
            <h1 className="text-2xl font-bold">your-tasks-in-this-group</h1>
            <div className="mt-5 flex flex-wrap">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
}