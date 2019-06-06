import { Component, OnInit } from '@angular/core';

import { UsersService } from '../core/services/users.service';
import { PostsService } from '../core/services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts = [];

  constructor(private usersService: UsersService, private postsService: PostsService) {
    this.posts = this.postsService.getAll();
  }

  ngOnInit() {
  }

  getProfilePicture(username) {
  	return this.usersService.getProfilePicture(username);
  }



}
