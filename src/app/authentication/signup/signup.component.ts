import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	showError: boolean;
	errorMessage: string;

	constructor(
		private authService: AuthenticationService,
		private userService: UserService
	) { }

	ngOnInit() {
	}

	onSignup(signupFormData): void {
		this.authService.signup(signupFormData.value.email, signupFormData.value.password)
			.then((userInfo) => {
				const user: User = new User(
					signupFormData.value.email,
					signupFormData.value.name,
					signupFormData.value.mobile,
					userInfo.user.uid,
					0,
					''
				);
				
				this.writeNewUser(user);
			}).catch((error) => {
				this.showError = true;
				this.errorMessage = error
			})
	}

	writeNewUser(user: User): void {
		this.userService.addUser(user);
	}

}
