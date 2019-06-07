import { ToDo } from 'src/app/models/to-do.model';

export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export class LoadTodosAction {
    readonly type = LOAD_TODOS;
    constructor() { }
}

export class LoadTodosSuccessAction {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: ToDo[]) { }
}

export class DeleteTodoAction {
    readonly type = DELETE_TODO;
    constructor(public payload: number) { }
}

export class DeleteTodoSuccessAction {
    readonly type = DELETE_TODO_SUCCESS;
    constructor(public payload: number) { }
}

export type Action
    = LoadTodosAction
    | LoadTodosSuccessAction
    | DeleteTodoAction
    | DeleteTodoSuccessAction;

