import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoBoardComponent } from './containers/to-do-board/to-do-board.component';
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
