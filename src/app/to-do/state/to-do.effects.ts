import { Injectable } from '@angular/core';
import { ToDoService } from 'src/app/to-do/services/to-do.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ToDoActionTypes, LoadTodosSuccess, DeleteTodo, LoadTodos } from './to-do.actions';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class ToDoEffects {

    constructor(
        private todoService: ToDoService,
        private actions$: Actions
    ) { }

    @Effect() loadTodos$ = this.actions$.pipe(
        ofType(ToDoActionTypes.LoadTodos),
        switchMap(() => this.todoService.getTodos()),
        map(todos => new LoadTodosSuccess(todos))
    );

    @Effect() deleteTodo$ = this.actions$.pipe(
        ofType(ToDoActionTypes.DeleteTodo),
        switchMap(
            (action: DeleteTodo) => this.todoService.deleteTodo(action.payload)
                .pipe(map(() => new LoadTodos())
                )
        )
    );
}
