import { useState } from "react";
import { useParams } from "react-router-dom";

import { useFetchMembers } from "../../../api/hooks/use-fetch-members";
import { Member } from "../../../shared/types/members";
import { SearchBar } from "../../search-bar/components/search-bar";
import { MemberCard } from "./member-card";

const Members: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const { id: groupId } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchMembers({
    groupId: groupId as string,
    username: search as string,
  });

  return (
    <div className="flex flex-col items-center w-[500px]">
      <h1 className="text-xl font-bold mt-5">click-to-set-schedule-rule</h1>
      <SearchBar
        placeholder="search-members"
        search={search}
        setSearch={setSearch}
      />
      {!isLoading &&
        data.data &&
        data.data.map((member: Member) => {
          return (
            <MemberCard member={member} key={member.id} groupId={groupId} />
          );
        })}
    </div>
  );
};

export { Members };
