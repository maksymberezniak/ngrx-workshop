import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDo } from '../models/to-do.model';

const getToDoFeatureState = createFeatureSelector<ToDo[]>('todos');

export const getTodos = createSelector(
    getToDoFeatureState,
    state => state
);