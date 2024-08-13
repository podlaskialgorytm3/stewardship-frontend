import { useState } from "react";

import { Member } from "../types/types";
import { MemberCard } from "./member-card";
import { SearchBar } from "../../search-bar/components/search-bar";

import useFetchMembersAddedToTask from "../api/use-fetch-members-added-to-task";

export const MembersAddedToTask: React.FC<{taskInfoId: string | undefined}> = ({taskInfoId}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembersAddedToTask({taskInfoId, username: search});

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mt-5">members-added-to-task</h1>
            <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
            {!isLoading && data && data.map((member: Member) => {
            return (
                <MemberCard member={member}  key={member.id}/>
            )
            })}   
        </div>
    )
}
