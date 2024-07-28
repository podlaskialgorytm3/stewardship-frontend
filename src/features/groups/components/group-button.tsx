import { MEMBERSHIPMENT } from "../constants/constants"

export const GroupButton = ({typeOfMember} : {typeOfMember: string}) => {
    const membership: {
        type: string;
        color: string;
        text: string;
    } | any = MEMBERSHIPMENT.find((membership) => membership.type === typeOfMember)
    
    return (
        <button className={`${membership.color} text-white px-4 py-2 rounded-lg`}>{membership.text}</button>
    )
}