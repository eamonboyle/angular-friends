import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	showError: boolean;
	errorMessage: string;
	private user: User;

	constructor(
		private authService: AuthenticationService,
		private userService: UserService,
		private router: Router,
		private angularFireAuth: AngularFireAuth
	) { 
		this.angularFireAuth.auth.onAuthStateChanged(user => {
			if (user) {
				this.getUserInfo(user.uid);
			}
		});
	}

	ngOnInit() {
	}

	onLogin(loginFormData): void {
		this.authService.login(loginFormData.value.email, loginFormData.value.password)
			.then((userInfo) => {
				const uid: string = userInfo.user.uid;
				this.getUserInfo(uid);
			})
			.catch((error) => {
				this.errorMessage = error.message;
				this.showError = true;
			});
	}

	onReset(resetFormData): void {
		this.authService.resetPassword(resetFormData.value.email)
			.then(() => {
				alert('Reset instructions sent to your mail');
			})
			.catch((error) => {
				this.errorMessage = error.message;
				this.showError = true;
			});
	}

	private getUserInfo(uid: string) {
		this.userService.getUser(uid)
			.subscribe(snapshot => {
				this.user = snapshot;
				this.navigateToUserProfile();
			});
	}

	private navigateToUserProfile() {
		this.router.navigateByUrl('/profile');
	}

}
