import { Component } from '@angular/core';
import { PostsService } from './core/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook';
  data = {};

  constructor(private postsService: PostsService) {
  }
}
