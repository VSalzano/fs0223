import { ITodo } from './../../Models/itodo';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos:ITodo[] = [];
  homeTodos:ITodo[] = [];
  loading:boolean = true;

  constructor(private todosSvc:TodosService) {
  }
  ngOnInit():void {
    this.getTodos();
  }

  getTodos():void{
    this.todosSvc.getTodos().then(res => {
      this.todos = res;
      this.homeTodos = this.todos.filter(todo => todo.completed == false);
      this.loading = false;
    })
  }

  delete(id?:number):void{

    this.todosSvc.deleteTodo(id)
    .then(res => {
      this.getTodos();
    })
  }

  checkTodo(id:any):void{

    this.todosSvc.getSingleTodo(id).then((res) => {
      console.log(res)
      res.completed = true;
      this.todosSvc.updateTodo(res)
      .then(res => window.location.reload())
    })

  }



}

