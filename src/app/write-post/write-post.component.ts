import { Component, OnInit } from '@angular/core';

import { PostsService } from '../core/services/posts.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {
  currentPostType: string = "text";
  postContent: string;
  imageResult;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  sharePost() {
    if (this.currentPostType == 'text') {
      this.shareTextPost();
    } else {
      this.shareImageVideoPost();
    }
  }

  shareTextPost() {
    let postContent = this.postContent;
    this.postContent = '';
    this.postsService.addPost({
      author: "Eslam Ahmed",
      username: "eslam",
      createdAt: Date.now(),
      likes: "0",
      content: postContent
    });
  }

  shareImageVideoPost() {
    let imageResult = this.imageResult;
    let postContent = this.postContent;
    this.postContent = '';

    this.postsService.addPost({
      author: "Eslam Ahmed",
      username: "eslam",
      createdAt: Date.now(),
      likes: "0",
      content: postContent,
      image: imageResult
    });

    this.switchPostType('text'); // Return to our default state
  }

  switchPostType(type) {
    switch (type) {
      case 'image/video':
        this.currentPostType = 'image/video';
        break;
      case 'text':
        this.currentPostType = 'text';
        break;
      default:
        break;
    }
  }

  onFileChange(event) {
    // We will be using an instance of `FileReader` which will override
    // our `this` context. So let's keep a reference for our
    // `WritePostComponent` instance and call it `that`
    let that = this;

    if (event.target.files && event.target.files[0]) {
      const reader: FileReader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: Event) => {
        that.imageResult = String(reader.result);
      }
    }
  }

}
