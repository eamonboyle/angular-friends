import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../services/user';
import { Friend } from 'src/app/services/friend';

@Component({
	selector: 'app-user-friends',
	templateUrl: './user-friends.component.html',
	styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {

	friends: Friend[];
	totalCount: number;
	pageSize = 3;
	currentCount = 0;
	previousCount = 0;
	isLeftVisible = false;
	isRightVisible = true;
	user: User;

	constructor(
		private userService: UserService,
		private friendService: FriendsService
	) { }

	ngOnInit() {
		this.user = this.userService.getSavedUser().getValue();
		this.totalCount = this.user.friendcount;
		this.friendService.getFirstPage(this.user.uid, this.pageSize)
			.subscribe(friends => {
				this.assignValues(friends);
			});
	}

	onLeft(): void {
		this.previous();
	}

	onRight(): void {
		this.next();
	}

	next() {
		this.friendService.loadNextPage(this.user.uid, this.friends[this.friends.length - 1].uid, this.pageSize)
			.subscribe(friends => {
				this.assignValues(friends);
			})
	}

	previous() {
		this.friendService.loadPreviousPage(this.user.uid, this.friends[0].uid, this.pageSize)
			.subscribe(friends => {
				this.assignValues(friends);
			})
	}

	leftArrowVisible(): void {
		this.isLeftVisible = this.currentCount > this.pageSize;
	}
	rightArrowVisible(): void {
		this.isRightVisible = this.currentCount > this.pageSize;
	}

	assignValues(friends: Friend[]) {
		this.friends = friends;
		const count: number = this.friends.length;
		this.currentCount = count;
		this.leftArrowVisible();
		this.rightArrowVisible();
	}

}
