import { Injectable } from '@angular/core';
import { ToDoService } from 'src/app/to-do/services/to-do.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as todosActions from '../../store/to-do/to-do.actions';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class ToDoEffects {

    constructor(
        private todoService: ToDoService,
        private actions$: Actions
    ) { }

    @Effect() loadTodos$ = this.actions$.pipe(
        ofType(todosActions.LOAD_TODOS),
        switchMap(() => this.todoService.getTodos()),
        map(todos => new todosActions.LoadTodosSuccessAction(todos))
    );

    @Effect() deleteTodo$ = this.actions$.pipe(
        ofType(todosActions.DELETE_TODO),
        switchMap(
            (action: todosActions.DeleteTodoAction) => this.todoService.deleteTodo(action.payload)
                .pipe(map(company => new todosActions.DeleteTodoSuccessAction(company.id))
                )
        )
    );
}
