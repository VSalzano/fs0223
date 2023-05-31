import { Component } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  activePostsArr:Posts[] = [];

  constructor(private postsSvc: PostsService) {
    this.postsSvc.getPosts()
    .then((activePosts:Posts[]) => this.activePostsArr = activePosts.filter(el => el.active == true));
  }
}

