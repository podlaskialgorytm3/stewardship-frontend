import { useState } from "react";
import useSearchGroup from "../api/use-search-group";
import { GroupCard } from "./group-card";
import { GroupResponse } from "../types/types";
import Loading from "../../../shared/components/loading";
import { SearchBar } from "../../search-bar/components/search-bar";

export const Groups: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const { data, isLoading } = useSearchGroup(search);

    return (
        <div className="flex items-center flex-col min-h-[50vh] mt-10">
            <h1 className="text-2xl font-bold">Groups</h1>
            <SearchBar placeholder="Search group" search={search} setSearch={setSearch}/>
            {isLoading ? (
                <Loading size={150} />
            ) : (
                <div className="w-full flex flex-wrap justify-center">
                    {data && data.data.length > 0 ? (
                        data.data.map((group: GroupResponse) => (
                            <GroupCard key={group.id} group={group} />
                        ))
                    ) : (
                        <p>No groups found</p>
                    )}
                </div>
            )}
        </div>
    );
}
