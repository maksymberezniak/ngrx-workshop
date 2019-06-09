import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToDo } from '../../models/to-do.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
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

  todos$: Observable<ToDo[]>;

  constructor(
    private store: Store<ToDoState>
  ) {
    this.todos$ = this.store.select(todoSelectors.getTodos);
  }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.store.dispatch(new todoActions.LoadTodos());
  }

  deleteTodo(item: ToDo) {
    this.store.dispatch(new todoActions.DeleteTodo(item.id));
  }
}
