import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { FriendsSearchService } from './services/friends-search.service';
import { User } from './services/user';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	authenticationService: AuthenticationService;
	startAt: string;
	endAt: string;
	users: User[];
	searchText: string;
	currentLoginUser: User;

	constructor(
		private authService: AuthenticationService,
		private friendsSearchService: FriendsSearchService,
		private userService: UserService
	) {
		this.authenticationService = authService;
	}

	ngOnInit() {
		this.userService.getSavedUser().subscribe((user) => {
			this.currentLoginUser = user;
		});
		this.searchText = '';
		this.onSearchFriends(this.searchText);
	}

	onSearch(event) {
		const text = event.target.value;
		this.onSearchFriends(text);
	}

	onSearchFriends(searchText: string) {
		const text = searchText;
		this.startAt = text;
		this.endAt = text + '\uf8ff';
		this.friendsSearchService.getSearchFriends(this.startAt, this.endAt)
			.subscribe(users => this.users = users);
	}
}
