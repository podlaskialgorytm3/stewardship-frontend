const UserSkillCard: React.FC<{
  skill: { id: string; skillName: string };
  type: string;
}> = ({ skill, type }) => {
  return (
    <div className="bg-[#7e007e] text-white p-2 m-1 rounded-xl flex">
      <p className="mr-2">{skill.skillName}</p>
      {type === "add" && <p>➕</p>}
      {type === "delete" && <p>🗑️</p>}
    </div>
  );
};

export { UserSkillCard };
