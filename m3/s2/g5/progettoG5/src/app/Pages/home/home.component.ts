import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/itodo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos:ITodo[] = [];
  loading:boolean = true;

  constructor(private todosSvc:TodosService) {
  }
  ngOnInit() {
    this.getTodos();
  }

    delete(id?:number) {
      this.todosSvc.deleteTodo(id)
      .then(res => {
        this.getTodos();
      })
    }

  getTodos() {
    this.todosSvc.getTodos().then(res => {
      this.todos = res;
      this.loading = false;
    })
  }
}

