import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';
import { EditType } from 'src/app/edit-dialog/edit-details';

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
		this.userService.getSavedUser().subscribe(
			(user) => {
				if (user.image) {
					this.profileImage = user.image;
				}
			}
		);
	}

	onLogout(): void {
		this.authService.signOut().then(() => {
			this.navigateToLogin();
		});
	}

	navigateToLogin() {
		this.router.navigateByUrl('/login');
	}

	onNameChange() {
		this.editDialog.setTitle('Do you want to edit name?')
			.setBodyTitle('name')
			.setBodyLabel('Enter new name')
			.setEditType(EditType.NAME)
			.show();
	}

	onEmailChange() {
		this.editDialog.setTitle('Do you want to edit email?')
			.setBodyTitle('email')
			.setBodyLabel('Enter new email')
			.setEditType(EditType.EMAIL)
			.show();
	}

	onMobileChange() {
		this.editDialog.setTitle('Do you want to edit mobile?')
			.setBodyTitle('mobile')
			.setBodyLabel('Enter new mobile')
			.setEditType(EditType.MOBILE)
			.show();
	}

	onPasswordChange() {
		this.editDialog.setTitle('Do you want to edit password?')
			.setBodyTitle('password')
			.setBodyLabel('Enter new password')
			.setEditType(EditType.PASSWORD)
			.show();
	}

	onPersonEdit(event) {
		const selectedFiles: FileList = event.target.files;
		const file = selectedFiles.item(0);
		this.userService.addProfileImage(this.user, file);
	}
}
