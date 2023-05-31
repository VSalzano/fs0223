import { Component } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-non-active-posts',
  templateUrl: './non-active-posts.component.html',
  styleUrls: ['./non-active-posts.component.scss']
})
export class NonActivePostsComponent {

  nonActivePostsArr:Posts[] = [];

  constructor(private postsSvc: PostsService) {
    this.postsSvc.getPosts()
    .then((activePosts:Posts[]) => this.nonActivePostsArr = activePosts.filter(el => el.active == false));
  }
}
