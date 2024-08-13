import { useParams } from "react-router-dom"

import { TaskMembers } from "../../task-members/components/task-members"

export const SingleTaskPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="mt-5 w-[1300px] flex">
            <div className="w-[70%]">

            </div>
            <div className="w-[30%]">
                <TaskMembers taskInfoId={id}/>
            </div>
        </div>
    )
}