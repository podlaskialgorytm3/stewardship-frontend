import { useState } from "react";

import { Member } from "../../../shared/types/members";

import { motion } from "framer-motion";

import { Loading } from "../../../shared/components/loading";

import { Box, Select, Button } from "@mui/material";

export const MemberCard: React.FC<{
  member: Member;
}> = ({ member }) => {
  const [isClick, setIsClick] = useState<boolean>(false);

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
            //onSubmit={handleSubmit(onSubmit as () => void)}
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
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
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
