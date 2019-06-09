export class ToDo {
    id: number;
    stage: 'waiting' | 'in progress' | 'done';
    asignee: string;
    avatar: string;
    email: string;
    description: string;
    priority: 'high' | 'low';
}
