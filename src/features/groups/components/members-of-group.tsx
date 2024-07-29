import { useState } from "react"

import { SearchBar } from "../../search-bar/components/search-bar"
import useFetchMembers from "../api/use-fetch-members";

export const MembersOfGroup: React.FC<{groupId: string | undefined}> = ({groupId}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembers({groupId: groupId as string, username: search as string});
    

    return(
        <div className="w-[30%] border-[2px] border-[#7e007e] rounded-xl flex flex-col items-center">
                <h1 className="text-xl font-bold">members-of-group</h1>
                <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
                
        </div>
    )
} 