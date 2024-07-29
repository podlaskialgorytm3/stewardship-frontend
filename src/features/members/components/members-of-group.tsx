import { useState } from "react"

import { SearchBar } from "../../search-bar/components/search-bar"
import useFetchMembers from "../api/use-fetch-members";
import { Member } from "../types/types";
import { MemberCard } from "./member-card";

export const MembersOfGroup: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembers({groupId: groupId as string, username: search as string});
    

    return(
        <div className="w-[30%] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
                <h1 className="text-xl font-bold mt-5">members-of-group</h1>
                <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
                {!isLoading && data.data && data.data.map((member: Member) => {
                    return (
                        <MemberCard member={member} groupId={groupId} />
                    )
                })}
        </div>
    )
} 