import { Component, OnInit } from '@angular/core';
import { PostsService } from '../core/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = [];

  constructor(private postsService: PostsService) {
  	this.posts = this.postsService.getAll();
  }

  ngOnInit() {
  }

}
