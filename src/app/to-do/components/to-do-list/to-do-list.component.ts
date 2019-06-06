import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../models/to-do.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input() title: string;
  @Input() todos: ToDo[];

  constructor() { }

  ngOnInit() {

  }

  drop(event) {
    console.log(event);
  }

}
