import { Injectable } from '@angular/core';
import { ToDoService } from 'src/app/to-do/services/to-do.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as todoActions from './to-do.actions';
import { ToDoActionTypes, LoadTodosSuccess } from './to-do.actions';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ToDoEffects {

    /*
        Inject actions observable wich emmits an action every
        time one is dispatched in our application
    */
    constructor(
        private todoService: ToDoService,
        private actions$: Actions
    ) { }

    /*
        Take an action
        Do some async work with side effects
        Return a new action
    */
    @Effect()
    loadTodos$ = this.actions$.pipe(
        ofType(ToDoActionTypes.LoadTodos),
        switchMap(() => this.todoService.getTodos().pipe(
            map(todos => new LoadTodosSuccess(todos)),
            catchError(err => of(new todoActions.LoadTodoFail(err))
            )
        ))
    );

    /*
        switchMap()
        On each emission the previous inner observable (the result of the function you supplied)
        is cancelled and the new observable is subscribed.
        You can remember this by the phrase switch to a new observable.
        Cancels previous http request

        mergeMap()
        allows for multiple inner subscriptions to be active at a time.
        Because of this, one of the most common use-case for mergeMap is requests
        that should not be canceled, think writes rather than reads.
        Run http requests in parallel

        concatMap()
        does not subscribe to the next observable until previous completes. Use it when order matters

        exhaustMap()
        Ignores all subsequent subscriptions/requests until current completes
        can be used during logins

        https://blog.angular-university.io/rxjs-higher-order-mapping/
    */

    @Effect()
    deleteTodo$ = this.actions$.pipe(
        ofType(ToDoActionTypes.DeleteTodo),
        mergeMap((action: todoActions.DeleteTodo) =>
            this.todoService.deleteTodo(action.payload).pipe(
                map(() => new todoActions.LoadTodos())
            )
        )
    );
}
