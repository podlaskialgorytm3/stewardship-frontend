const SkillCard: React.FC<{
  skill: { id: string; skillName: string; isRemote: boolean };
}> = ({ skill }) => {
  return (
    <div className="w-[300px] border-[2px] border-primary border-solid rounded-lg flex justify-between items-center p-2 mt-3">
      <div>
        <h1 className="font-bold">{skill.skillName}</h1>
        <p>{skill.isRemote && "remote"}</p>
      </div>
      <p>🗑️</p>
    </div>
  );
};

export { SkillCard };
