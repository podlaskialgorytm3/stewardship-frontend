import { useState } from "react";

import useFetchMembers from "../../members/api/use-fetch-members";
import { Member } from "../../members/types/types";
import { SearchBar } from "../../search-bar/components/search-bar";
import { MemberCard } from "../../members/components/member-card";
import { defaultTheme } from "../../../shared/themes/themes";

import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const TaskAffilation: React.FC<{groupId: string | undefined, handleBack: () => void}> = ({groupId, handleBack}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembers({groupId: groupId as string, username: search as string});

    return(
    <ThemeProvider theme={defaultTheme}>
        <div className="w-[400px] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center mt-10">
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold mt-5">members-of-group</h1>
                <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
                {!isLoading && data.data && data.data.map((member: Member) => {
                return (
                    <MemberCard member={member} groupId={groupId} key={member.id} type="affilation"/>
                )
                })}
                 
            </div>
        </div>
        <Button
            fullWidth
            variant="contained"
            sx={{
                mt: 2,
                width: "400px"
            }}
            onClick={() => handleBack()}
            >
            Back
        </Button>  
        </ThemeProvider>
    )
}