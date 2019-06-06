import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	private _users: User[] = [
		{
			username: 'stevejobs',
			name: 'Steve Jobs',
			image: ''
		},
		{
			username: 'zuck',
			name: 'Mark Zuckerberg',
			image: ''
		},
		{
			username: 'bezos',
			name: 'Jeff Bezos',
			image: ''
		}
	];

  constructor() {}

  getUser(username: string) {
  		return this._users.filter(username => username == username);
  	}

	getAll() {
		return [...this._users];
	}

	getProfilePicture(username: string) {
		return "assets/profile-pictures/" + username + ".jpg";
	}
}
