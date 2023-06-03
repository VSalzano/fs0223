import { Component } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


  constructor(private todosSvc: TodosService){}

  todo:Todo = new Todo('', false);

  create(){
    this.todosSvc.addTodo(this.todo);
    window.location.reload()
  }
}
