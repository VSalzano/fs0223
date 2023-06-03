import { Component } from '@angular/core';
import { ITodo } from 'src/app/Models/itodo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {

  todos:ITodo[] = [];
  completedTodos:ITodo[] = [];
  loading = true;

  constructor(private todosSvc:TodosService) {}

  ngOnInit():void {
    this.getTodos();
  }

  getTodos():void{
    this.todosSvc.getTodos().then(res => {
      this.todos = res;
      this.completedTodos = this.todos.filter(todo => todo.completed == true);
      this.loading = false;
    })
  }

  delete(id?:number):void{

    this.todosSvc.deleteTodo(id)
    .then(res => {
      this.getTodos();
    })
  }
}
