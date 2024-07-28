import { MEMBERSHIPMENT } from "../constants/constants"

export const GroupButton = ({typeOfMember,groupId} : {typeOfMember: string, groupId: number}) => {
    const membership: {
        type: string;
        color: string;
        text: string;
    } | any = MEMBERSHIPMENT.find((membership) => membership.type === typeOfMember)

    const handleClick = (type: string) => {
        if(type === 'none'){
            // call to API to join group
        }
        else if(type === 'member'){
            // redirect to group page
        }
    }

    return (
        <button 
            className={`${membership.color} text-white px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => handleClick(membership.type)}
        >{membership.text}</button>
    )
}