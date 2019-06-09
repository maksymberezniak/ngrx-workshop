import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoBoardComponent } from './components/to-do-board/to-do-board.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/to-do.reducer';
import { ToDoEffects } from './state/to-do.effects';
import { EffectsModule } from '@ngrx/effects';

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
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forFeature([ToDoEffects])
  ],
  exports: [
    ToDoBoardComponent
  ]
})
export class ToDoModule { }
