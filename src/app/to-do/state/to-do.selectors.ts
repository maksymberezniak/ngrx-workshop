import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDoState } from './to-do.reducer';

const getToDoFeatureState = createFeatureSelector<ToDoState>('todos');

export const getWaitingTodos = createSelector(
    getToDoFeatureState,
    state => state.todos.filter(todo => todo.stage === 'waiting')
);

export const getInProgressTodos = createSelector(
    getToDoFeatureState,
    state => state.todos.filter(todo => todo.stage === 'in progress')
);

export const getDoneTodos = createSelector(
    getToDoFeatureState,
    state => state.todos.filter(todo => todo.stage === 'done')
);

export const getError = createSelector(
    getToDoFeatureState,
    state => state.error
);
