export interface GroupResponse {
    id: number;
    name: string;
    category: string;
    membership: string
}
export interface HandlingGroupCard {
    sendRequestMutate: any;
    cancelRequestMutate: any;
    groupId: number;
    typeOfMember: string;
}
export interface Member {
    id: number;
    name: string;
    role: string;
    img: string;
    groupId: number; 
}