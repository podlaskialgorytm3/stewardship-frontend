import { useState } from "react";
import useSearchGroup from "../api/use-search-group";
import { GroupCard } from "./group-card";
import { GroupResponse } from "../types/types";
import Loading from "../../../shared/components/loading";
import { SearchBar } from "../../search-bar/components/search-bar";
import { useNavigate } from "react-router-dom";

export const Groups: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useSearchGroup(search);

  return (
    <div className="flex items-center flex-col min-h-[50vh] mt-10">
      <h1 className="text-2xl font-bold">groups</h1>
      <SearchBar
        placeholder="search-groups"
        search={search}
        setSearch={setSearch}
      />
      <button
        className="bg-[#7e007e] hover:bg-[#b331b3] text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => navigate("/dashboard/create-group")}
      >
        create-group
      </button>
      {isLoading ? (
        <Loading size={150} />
      ) : (
        <div className="w-full flex flex-wrap justify-center">
          {data && data.data.length > 0 ? (
            data.data.map((group: GroupResponse) => (
              <GroupCard key={group.id} group={group} />
            ))
          ) : (
            <p className="mt-10">no groups found</p>
          )}
        </div>
      )}
    </div>
  );
};
