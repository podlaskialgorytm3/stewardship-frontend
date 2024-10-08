import { useState } from "react";

import { Member } from "../../../shared/types/members";

import { motion } from "framer-motion";

import { useFetchBelongingSkills } from "../api/use-fetch-belonging-skills";
import { useFetchNotBelongingSkills } from "../api/use-fetch-not-belonging-skills";

import { Loading } from "../../../shared/components/loading";
import { UserSkillCard } from "./user-skill-card";

export const MemberCard: React.FC<{
  member: Member;
}> = ({ member }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const { data: belongingSkills, isLoading: lodaingBelongSkills } =
    useFetchBelongingSkills({
      groupUserId: member.id,
    });
  const { data: notBelongingSkills, isLoading: loadingNotBelongSkills } =
    useFetchNotBelongingSkills({
      groupUserId: member.id,
    });

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
          <p className="font-bold">user's skill</p>
          <div className="flex flex-wrap">
            {lodaingBelongSkills && <Loading size={50} />}
            {belongingSkills?.length === 0 && <p>no skills</p>}
            {!lodaingBelongSkills &&
              belongingSkills &&
              belongingSkills?.map(
                (skill: { id: string; skillName: string }) => (
                  <UserSkillCard
                    key={skill.id}
                    skill={skill}
                    type="delete"
                    groupUserId={member.id}
                  />
                )
              )}
          </div>
          <p className="font-bold">add skils to user</p>
          <div className="flex flex-wrap justify-center">
            {loadingNotBelongSkills && <Loading size={50} />}
            {notBelongingSkills?.length === 0 && <p>no skills</p>}
            {!loadingNotBelongSkills &&
              notBelongingSkills &&
              notBelongingSkills?.map(
                (skill: { id: string; skillName: string }) => (
                  <UserSkillCard
                    key={skill.id}
                    skill={skill}
                    type="add"
                    groupUserId={member.id}
                  />
                )
              )}
          </div>
        </motion.div>
      }
    </>
  );
};
