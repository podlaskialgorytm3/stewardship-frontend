import { useState } from "react";

import { Member } from "../types/types";
import { MemberCard } from "./member-card";
import { SearchBar } from "../../../../search-bar/components/search-bar";

import { useFetchMembersOffTask } from "../api/use-fetch-members-off-task";

export const MembersOffTask: React.FC<{
  taskInfoId: string | undefined;
  isAdmin: boolean;
}> = ({ taskInfoId, isAdmin }) => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useFetchMembersOffTask({
    taskInfoId: taskInfoId,
    username: search,
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mt-5">members-off-task</h1>
      <SearchBar
        placeholder="Search off members"
        search={search}
        setSearch={setSearch}
      />
      {!isLoading &&
        data &&
        data.map((member: Member) => {
          return (
            <MemberCard
              member={member}
              key={member.id}
              type={"no-added"}
              isAdmin={isAdmin}
              taskInfoId={taskInfoId}
            />
          );
        })}
    </div>
  );
};
