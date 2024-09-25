import { useState } from "react";

import { Member } from "../../../shared/types/members";

import { motion } from "framer-motion";

import { Loading } from "../../../shared/components/loading";

import { Box, Select, Button, MenuItem } from "@mui/material";

import { useFetchScheduleRules } from "../api/use-fetch-schedule-rules";
import { useHandleSetScheduleRule } from "../hooks/use-handle-set-schedule-rule";
import { ScheduleRuleInterface } from "../types/types";

export const MemberCard: React.FC<{
  member: Member;
  groupId: string | undefined;
}> = ({ member, groupId }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [scheduleRuleId, setScheduleRuleId] = useState<{
    scheduleRuleId: string;
  }>({ scheduleRuleId: member.scheduleRuleId });

  const { data, isLoading } = useFetchScheduleRules({ groupId } as {
    groupId: string;
  });

  const { onSubmit, register, errors, handleSubmit } = useHandleSetScheduleRule(
    {
      setScheduleRuleId,
      groupUserId: String(member.id),
    }
  );

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div
        className="flex items-center justify-between w-[95%] p-2 rounded-xl cursor-pointer hover:bg-[#7e007e] hover:text-white"
        onClick={() => handleClick()}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-[50px] h-[50px] rounded-full object-cover border-[#7e007e] border-[1px]"
        />
        <p>{member.name}</p>
        <p>
          <motion.div
            onClick={handleClick}
            style={{ cursor: "pointer", fontSize: "48px", userSelect: "none" }}
            animate={{ rotate: isClick ? 0 : 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            ▲
          </motion.div>
        </p>
      </div>
      {
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isClick ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="m-4 font-bold text-lg">select schedule rule</h1>
          <Box
            component="form"
            color={"secondary"}
            onSubmit={handleSubmit(onSubmit as () => void)}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              gap: 2,
              width: "300px",
              margin: "auto",
            }}
          >
            <Select
              label="Select"
              placeholder="Select"
              variant="outlined"
              color="secondary"
              sx={{ width: "100%" }}
              {...register("scheduleRuleId")}
              error={Boolean(errors.scheduleRuleId)}
              defaultValue={member.scheduleRuleId}
            >
              {isLoading && <Loading size={50} />}
              {data?.map((scheduleRule: ScheduleRuleInterface) => (
                <MenuItem
                  key={scheduleRule.id}
                  value={scheduleRule.id}
                  className="cursor-pointer"
                >
                  {scheduleRule.scheduleRuleName}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </Box>
        </motion.div>
      }
    </>
  );
};
