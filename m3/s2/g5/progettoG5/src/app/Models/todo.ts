import { ITodo } from "./itodo";

export class Todo implements ITodo {
  id?:number;
  body:string;
  completed:boolean = false;

  constructor(body:string, completed:boolean, id?:number) {
    this.id = id;
    this.body = body;
    this.completed = completed;
  }
}
