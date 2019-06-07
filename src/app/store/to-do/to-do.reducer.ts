import * as todoActions from './to-do.actions';


export function todoReducer(state = [], action: todoActions.Action) {
    switch (action.type) {
        case todoActions.LOAD_TODOS_SUCCESS: {
            return action.payload;
        }
        case todoActions.DELETE_TODO_SUCCESS: {
            return state.filter(todo => todo.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}
