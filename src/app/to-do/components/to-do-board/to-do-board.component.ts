import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToDo } from '../../../models/to-do.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import * as todoActions from '../../../store/to-do/to-do.actions';

@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoBoardComponent implements OnInit {

  todos$: Observable<ToDo[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.todos$ = this.store.select(state => state.todos);
  }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.store.dispatch(new todoActions.LoadTodosAction());
  }

  deleteTodo(item: ToDo) {
    this.store.dispatch(new todoActions.DeleteTodoAction(item.id));
  }
}
