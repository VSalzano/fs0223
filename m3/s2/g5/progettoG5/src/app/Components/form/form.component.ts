import { Component } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  todo:Todo = new Todo('', false);

  constructor(private todosSvc: TodosService){}

  create(){
    this.todosSvc.addTodo(this.todo)
    .then(res => console.log(res));
  }
}
