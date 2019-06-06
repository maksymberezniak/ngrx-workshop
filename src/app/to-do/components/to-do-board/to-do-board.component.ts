import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDo } from '../../models/to-do.model';

@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.scss']
})
export class ToDoBoardComponent implements OnInit {

  waitingToDos: ToDo[] = [];
  inProgressToDos: ToDo[] = [];
  doneToDos: ToDo[] = [];

  constructor(
    private toDoService: ToDoService
  ) { }

  ngOnInit() {
    this.toDoService.getTodos()
      .subscribe(todos => {
        todos.forEach(todo => {
          switch (todo.stage) {
            case 'done': this.doneToDos.push(todo); break;
            case 'in progress': this.inProgressToDos.push(todo); break;
            case 'waiting': this.waitingToDos.push(todo); break;
            default: break;
          }
        });

        console.log({ waiting: this.waitingToDos });
        console.log({ inProgress: this.inProgressToDos });
        console.log({ done: this.doneToDos });
      });
  }
}
