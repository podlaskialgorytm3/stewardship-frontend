import { useState } from "react"

import { SearchBar } from "../../search-bar/components/search-bar"
import useFetchMembers from "../api/use-fetch-members";

export const MembersOfGroup: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembers({groupId: groupId as string, username: search as string});
    

    return(
        <div className="w-[30%] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
                <h1 className="text-xl font-bold mt-5">members-of-group</h1>
                <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
                {!isLoading && data.data && data.data.map((member: any) => {
                    return (
                        <div key={member.id} className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white">
                            <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
                            <p>{member.name}</p>
                            <p>{member.role}</p>
                        </div>
                    )
                })}
        </div>
    )
} 