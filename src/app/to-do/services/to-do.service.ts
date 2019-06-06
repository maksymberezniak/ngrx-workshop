import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get<ToDo[]>('http://localhost:3000/todos');
  }
}
