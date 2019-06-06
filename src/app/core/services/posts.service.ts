import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TextPost } from '../models/text-post.model';
import { PhotoPost } from '../models/photo-post.model';
import { VideoPost } from '../models/video-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
	_posts = [];

	constructor(private http: HttpClient) {
		this.getJSON().subscribe(data => {
			data.forEach(x => this._posts.push(x));
		});
	}

	getJSON() {
		return this.http.get<any[]>('assets/data.json');
	}

	getAll() {
		return this._posts;
	}

	addPost(post) {
		this._posts.unshift(post); // Push post's meta on top of the stack
	}

	addTextPost(post: TextPost) {}

	addPhotoPost(post: PhotoPost) {}

	addVideoPost(post: VideoPost) {}
}
