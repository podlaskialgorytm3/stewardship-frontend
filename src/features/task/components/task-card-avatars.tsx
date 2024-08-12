import { Member } from '../types/types';

export const TaskCardAvatars: React.FC<{members: Member[]}> = ({members}) => {
    return (
        <div className="flex items-center mb-4">
        <div className="flex -space-x-3">
        {members.length > 3 && (
            <>
            {members.slice(0, 3).map((member) => (
            <img
                key={member.id}
                className="w-12 h-12 rounded-full border-2 border-dark object-cover"
                src={member.img}
                alt={member.name}
            />
            ))}
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm border-2 border-dark ">
            {`+${members.length - 3}`}
            </div>
            </>
        )}
        {
            members.length <= 3 &&
            members.map((member) => (
            <img
                key={member.id}
                className="w-12 h-12 rounded-full border-2 border-dark object-cover"
                src={member.img}
                alt={member.name}
            />
            ))
        }
        </div>
      </div>
    )
}