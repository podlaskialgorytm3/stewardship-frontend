import { GroupResponse } from "../types/types"

export const GroupCard = ({group} : {group: GroupResponse}) => {
    return(
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-lg font-bold">{group.name}</h1>
                    <p className="text-sm">{group.category}</p>
                    <p>{group.membership}</p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button>
                </div>
            </div>
    )
}