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

interface Member {
    email: string;
    group: string;
    id: string;
    img: string;
    name: string;
    role: string;
}

interface TaskInfoResponse {
    assignedBy: Member;
    comments: string;
    endDate: string;
    startDate: string;
    id: string,
    name: string;
    priority: string;
    status: string;
    time: number;
}

interface SubtaskResponse {
    assignedBy: Member;
    description: string;
    id: string;
    status: string;
    title: string;
    taskInfoId: string;
}

export interface TaskCardInterface {
    taskInfo: TaskInfoResponse;
    subtasks: SubtaskResponse[];
    taskAffiliation: Member[];
    precentOfDoneSubtasks: string;
}