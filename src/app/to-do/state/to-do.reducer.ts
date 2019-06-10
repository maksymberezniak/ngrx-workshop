import { TodoAction, ToDoActionTypes } from './to-do.actions';

import { ToDo } from '../models/to-do.model';

export interface ToDoState {
    todos: ToDo[];
    error: string;
}

export const initialState: ToDoState = {
    todos: [],
    error: ''
};

export function todoReducer(state = initialState, action: TodoAction): ToDoState {
    switch (action.type) {
        case ToDoActionTypes.LoadTodosSuccess:
            return {
                ...state,
                todos: action.payload
            };

        case ToDoActionTypes.LoadTodoFail:
            return {
                ...state,
                todos: [],
                error: action.payload
            };

        default:
            return {
                ...state
            };
    }
}
