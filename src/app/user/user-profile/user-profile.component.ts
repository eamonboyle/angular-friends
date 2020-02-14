import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';

@Component({
	selector: 'app-profile',
	styleUrls: ['user-profile.component.scss'],
	templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

	profileImage: any = '../../../assets/images/person_edit.png';
	private user: User;

	@ViewChild(EditDialogComponent, null) editDialog: EditDialogComponent;

	constructor(
		private authService: AuthenticationService,
		private userService: UserService,
		private router: Router) {
	}

	ngOnInit() {
		this.user = this.userService.getSavedUser().getValue();
		console.log(this.user);
	}

	onLogout(): void {
		this.authService.signOut().then(() => {
			this.navigateToLogin();
		});
	}

	navigateToLogin() {
		this.router.navigateByUrl('/login');
	}
}
