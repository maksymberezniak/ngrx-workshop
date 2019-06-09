import { TodoAction, ToDoActionTypes } from './to-do.actions';

import { ToDo } from '../models/to-do.model';

export interface ToDoState {
    waiting: ToDo[];
    inProgress: ToDo[];
    done: ToDo[];
}

export const initialState: ToDoState = {
  waiting: [],
  inProgress: [],
  done: []  
};

export function todoReducer(state = initialState, action: TodoAction): ToDoState {
    switch (action.type) {
        case ToDoActionTypes.LoadTodosSuccess:
            return {
                ...state,
                waiting: action.payload.filter(todo => todo.stage === 'waiting'),
                inProgress: action.payload.filter(todo => todo.stage === 'in progress'),
                done: action.payload.filter(todo => todo.stage === 'done')
            };

        default:
            return {
                ...state
            };
    }
}
