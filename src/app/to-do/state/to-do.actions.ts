import { ToDo } from 'src/app/to-do/models/to-do.model';
import { Action } from '@ngrx/store';

/*
    1. Define the action types as constants
    2. Create classes that represents those actions
    3. Define the union type for the actions
*/

export enum ToDoActionTypes {
    LoadTodos = '[ToDo] Load Todos',
    LoadTodosSuccess = '[ToDo] Load Todos Success',
    DeleteTodo = '[ToDo] Delete Todo',
    DeleteTodoSuccess = '[ToDo] Delete Todo Success'
}

export class LoadTodos implements Action {
    readonly type = ToDoActionTypes.LoadTodos;
    constructor() { }
}

export class LoadTodosSuccess implements Action {
    readonly type = ToDoActionTypes.LoadTodosSuccess;
    constructor(public payload: ToDo[]) { }
}

export class DeleteTodo implements Action {
    readonly type = ToDoActionTypes.DeleteTodo;
    constructor(public payload: number) { }
}

export class DeleteTodoSuccess implements Action {
    readonly type = ToDoActionTypes.DeleteTodoSuccess;
    constructor(public payload: number) { }
}

export type TodoAction
    = LoadTodos
    | LoadTodosSuccess
    | DeleteTodo
    | DeleteTodoSuccess;

