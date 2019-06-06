import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from '../core/services/users.service';

import { TextPost } from '../core/models/text-post.model';
import { PhotoPost } from '../core/models/photo-post.model';
import { VideoPost } from '../core/models/video-post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	@Input() post;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
  }

  getProfilePicture(username: string) {
    return this.usersService.getProfilePicture(username);
  }

  getUserImage() {
  	return "https://source.unsplash.com/52x52";
  }

  getLikeIcon() {
    return "assets/like-icon.png";
  }

}
