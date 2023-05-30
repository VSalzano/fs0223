import { Component } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  activePosts:Posts[] = [];

  constructor(private postsSvc: PostsService) {
    postsSvc.getPosts()
    .then(activePosts => this.activePosts = activePosts)
  }
}
