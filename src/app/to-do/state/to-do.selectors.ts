import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDoState } from './to-do.reducer';

const getToDoFeatureState = createFeatureSelector<ToDoState>('todos');

export const getWaitingTodos = createSelector(
    getToDoFeatureState,
    state => state.waiting
);

export const getInProgressTodos = createSelector(
    getToDoFeatureState,
    state => state.inProgress
);

export const getDoneTodos = createSelector(
    getToDoFeatureState,
    state => state.done
);