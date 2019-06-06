import { Injectable } from '@angular/core';
import { ToDoModule } from '../to-do.module';

@Injectable({
  providedIn: ToDoModule
})
export class ToDoService {

  constructor() { }
}
