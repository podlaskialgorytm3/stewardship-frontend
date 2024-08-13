import { useState } from "react";

import { Member } from "../types/types";
import { MemberCard } from "./member-card";
import { SearchBar } from "../../search-bar/components/search-bar";

export const MembersOffTask: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const [search, setSearch] = useState<string>("");

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mt-5">members-off-task</h1>
            <SearchBar placeholder="Search off members" search={search} setSearch={setSearch} />
            {/* {!isLoading && data.data && data.data.map((member: Member) => {
            return (
                <MemberCard member={member} groupId={groupId} key={member.id} type="waiting"/>
            )
            })}   */}
        </div>
    )
}
