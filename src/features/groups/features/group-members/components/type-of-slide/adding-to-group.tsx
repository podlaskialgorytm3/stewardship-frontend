import { useState } from "react";

import { Member } from "../../../../../../shared/types/members";
import { SearchBar } from "../../../../../search-bar/components/search-bar";
import { MemberCard } from "../member-card";
import { useFetchUsers } from "../../api/use-fetch-users";

const AddingToGroup: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useFetchUsers({ groupId, username: search });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mt-5">adding-to-group</h1>
      <SearchBar
        placeholder="search-users"
        search={search}
        setSearch={setSearch}
      />
      {!isLoading &&
        data.data &&
        data.data.map((member: Member) => {
          return (
            <MemberCard
              member={member}
              groupId={groupId}
              key={member.id}
              type="added"
            />
          );
        })}
    </div>
  );
};

export default AddingToGroup;
