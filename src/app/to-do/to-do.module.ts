import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoBoardComponent } from './components/to-do-board/to-do-board.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    ToDoItemComponent,
    ToDoListComponent,
    ToDoBoardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    DragDropModule
  ],
  exports: [
    ToDoBoardComponent
  ]
})
export class ToDoModule { }
