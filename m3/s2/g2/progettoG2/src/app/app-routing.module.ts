import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { NonActivePostsComponent } from './pages/non-active-posts/non-active-posts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'active-posts',
    component: ActivePostsComponent
  },
  {
    path:'non-active-posts',
    component: NonActivePostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
