import { TodoAction, ToDoActionTypes } from './to-do.actions';

import { ToDo } from '../models/to-do.model';

export interface ToDoState {
    todos: ToDo[];
}

export function todoReducer(state: ToDo[], action: TodoAction): ToDo[] {
    switch (action.type) {
        case ToDoActionTypes.LoadTodosSuccess: {
            return action.payload;
        }
        case ToDoActionTypes.DeleteTodoSuccess: {
            return state.filter(todo => todo.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}
