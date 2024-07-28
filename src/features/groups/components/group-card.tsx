import { GroupResponse } from "../types/types"
import { GroupButton } from "./group-button"

export const GroupCard = ({group} : {group: GroupResponse}) => {
    return(
            <div className="flex justify-center items-center flex-col h-[150px] w-[350px] border-[#7e007e] border-[1px] rounded-2xl m-4">
                <h1 className="text-2xl font-bold">{group.name}</h1>
                <h3>{group.category}</h3>
                <GroupButton typeOfMember={group.membership} />
            </div>
    )
}