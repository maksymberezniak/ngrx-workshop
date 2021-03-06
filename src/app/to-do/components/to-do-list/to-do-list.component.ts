import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../models/to-do.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() title: string;
  @Input() todos: ToDo[];
  @Output() delete: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {

  }

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);
  }

  onDelete(todo) {
    console.log('in presentational component');
    this.delete.emit(todo);
  }
}
