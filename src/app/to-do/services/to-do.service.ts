import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../../models/to-do.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get<ToDo[]>('http://localhost:3000/todos');
  }

  deleteTodo(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/todos/${id}`);
  }
}
