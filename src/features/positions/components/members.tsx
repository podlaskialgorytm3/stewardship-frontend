import { useState } from "react";

import { useFetchMembers } from "../api/use-fetch-members";
import { Member } from "../../../shared/types/members";
import { SearchBar } from "../../search-bar/components/search-bar";
import { MemberCard } from "./member-card";

const Members: React.FC<{ groupId: string | undefined }> = ({ groupId }) => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useFetchMembers({
    groupId: groupId as string,
    username: search as string,
  });

  return (
    <div className="flex flex-col items-center w-[500px]">
      <h1 className="text-xl font-bold mt-5">click-to-set-position</h1>
      <SearchBar
        placeholder="search-members"
        search={search}
        setSearch={setSearch}
      />
      {!isLoading &&
        data.data &&
        data.data.map((member: Member) => {
          return <MemberCard member={member} key={member.id} />;
        })}
    </div>
  );
};

export { Members };
