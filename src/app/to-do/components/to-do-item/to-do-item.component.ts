import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../../models/to-do.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: ToDo;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  onDelete(event) {

  }
}
