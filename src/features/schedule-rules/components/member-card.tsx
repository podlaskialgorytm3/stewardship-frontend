import { useState } from "react";

import { Member } from "../../../shared/types/members";

import { motion } from "framer-motion";

import { Loading } from "../../../shared/components/loading";

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
        ></motion.div>
      }
    </>
  );
};
