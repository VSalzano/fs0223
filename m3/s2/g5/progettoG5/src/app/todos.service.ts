import { ITodo } from './Models/itodo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = 'http://localhost:3000/todo';

  allTodos:ITodo[] = [];

  constructor() { }

  getTodos(): Promise<ITodo[]> {
    return fetch (this.apiUrl).then(response => response.json());
  }

  getSingleTodo(id:number):Promise<ITodo> {
    return fetch (this.apiUrl + '/' + id).then(response => response.json());
  }

  addTodo(todo:ITodo):Promise<ITodo> {
    return fetch (this.apiUrl, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }

  updateTodo(todo:ITodo){
    return fetch(this.apiUrl+'/'+todo.id,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }

  deleteTodo(id:number = 0){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE',
    }).then(response => response.json());
  }

}
