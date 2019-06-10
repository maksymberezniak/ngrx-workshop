import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToDo } from '../../models/to-do.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as todoActions from '../../state/to-do.actions';
import * as todoSelectors from '../../state/to-do.selectors';
import { ToDoState } from '../../state/to-do.reducer';

@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoBoardComponent implements OnInit {

  waitingTodos$: Observable<ToDo[]>;
  inProgressTodos$: Observable<ToDo[]>;
  doneTodos$: Observable<ToDo[]>;

  error$: Observable<string>;

  constructor(
    private store: Store<ToDoState>
  ) {
    this.waitingTodos$ = this.store.pipe(
      select(todoSelectors.getWaitingTodos)
    );

    this.inProgressTodos$ = this.store.pipe(
      select(todoSelectors.getInProgressTodos)
    );

    this.doneTodos$ = this.store.pipe(
      select(todoSelectors.getDoneTodos)
    );

    this.error$ = this.store.pipe(
      select(todoSelectors.getError)
    );
  }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.store.dispatch(new todoActions.LoadTodos());
  }

  deleteTodo(item: ToDo) {
    console.log(item);
    this.store.dispatch(new todoActions.DeleteTodo(item.id));
  }
}
