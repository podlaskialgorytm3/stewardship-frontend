import { TaskCard } from './task-card'; 
import useFetchTasksToCards from '../api/use-fetch-tasks-to-cards';
import useErrorMessage from '../../../shared/hooks/use-error-message';
import Loading from '../../../shared/components/loading';
import { TaskCardInterface } from '../types/types';

export const TaskArea: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const { data, isLoading, isError, error } = useFetchTasksToCards(groupId);

    return (
        <div className="w-[100%] flex flex-col items-center justify-start mt-5">
            <h1 className="text-2xl font-bold">your-tasks-in-this-group</h1>
            <div className="mt-5 flex flex-wrap">
                {isLoading && !data && <Loading size={150}/>}
                {!isLoading && data && data.map((task: TaskCardInterface) => (
                    <TaskCard key={task.taskInfo.id} task={task}/>
                ))}
            </div>
        </div>
    );
}