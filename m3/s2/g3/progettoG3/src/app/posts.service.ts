import { Injectable } from '@angular/core';
import { Posts } from './Models/posts'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  db:string = 'assets/db.json'

  constructor() { }

  getPosts():Promise<Posts[]>{
    return fetch(this.db).then(res => res.json());
  }
}
