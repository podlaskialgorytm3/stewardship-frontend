export interface GroupResponse {
  id: string;
  name: string;
  category: string;
  membership: string;
}
export interface HandlingGroupCard {
  sendRequestMutate: any;
  cancelRequestMutate: any;
  groupId: string;
  typeOfMember: string;
}
