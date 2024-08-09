import { useState } from "react";

import { Member } from "../../members/types/types";
import { SearchBar } from "../../search-bar/components/search-bar";

import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";

import useFetchMembers from "../api/use-fetch-members";

export const TaskAffilation: React.FC<{groupId: string | undefined, handleCheck: (memberId: number) => void; checked: { memberId: number, check: boolean }[]}> 
    = ({groupId, handleCheck, checked}) => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading } = useFetchMembers({groupId: groupId as string, username: search as string});

    return(
    <>
        <h1 className="text-2xl font-bold mt-10">add-members-to-task</h1>
        <div className="w-[400px] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center mt-10">
            <div className="flex flex-col items-center">
                <SearchBar placeholder="Search members" search={search} setSearch={setSearch} />
                {!isLoading && data.data && data.data.map((member: Member) => {
                return (
                    <div 
                        className="flex items-center justify-between w-[90%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
                        key={member.id}
                        >
                        <img src={member.img} alt={member.name} className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]" />
                        <p>{member.name}</p>
                        <div className="w-[50px] flex justify-between">
                            <Checkbox
                                color="secondary"
                                defaultChecked={checked.find((item: any) => item.memberId === member.id)?.check || false} 
                                onChange={() => handleCheck(member.id)}
                            />
                        </div>
                    </div>
                )
                })}
                 
            </div>
        </div>
        </>
    )
}