import { ITodo } from "./itodo";

export class Todo implements ITodo {
  id?:number;
  body:string;
  completed:boolean = false;

  constructor(id:number, body:string, completed:boolean) {
    this.id = id;
    this.body = body;
    this.completed = completed;
  }
}
