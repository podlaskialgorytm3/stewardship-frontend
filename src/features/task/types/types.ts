export interface SubtaskInterface {
    title: string;
    description: string;
    status: string;
}
export interface TaskInterface {
    'task-name': string;
    'start-date': string;
    'end-date': string;
     status: string;
     priority: string;
     comments: string;
}
export interface TaskAffilationInterface {
    memberId: number;
    check: boolean;
}