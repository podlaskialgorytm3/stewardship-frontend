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