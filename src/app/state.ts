import { AppState } from './state/app.state';
import { ToDoState } from './to-do/state/to-do.reducer';

export interface State {
    app: AppState;
    todos: ToDoState;
}