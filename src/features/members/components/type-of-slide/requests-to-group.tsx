import { useState } from "react";

import useFetchRequest from "../../api/use-fetch-requests";
import { Member } from "../../types/types";
import { SearchBar } from "../../../search-bar/components/search-bar";
import { MemberCard } from "../member-card";

const RequestsToGroup: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchRequest({groupId: groupId as string, username: search as string});

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mt-5">requests-of-group</h1>
            <SearchBar placeholder="Search requests" search={search} setSearch={setSearch} />
            {!isLoading && data.data && data.data.map((member: Member) => {
            return (
                <MemberCard member={member} groupId={groupId} key={member.id} type="waiting"/>
            )
            })}        
        </div>
    )
}

export default RequestsToGroup;