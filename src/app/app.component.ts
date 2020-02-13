import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	authenticationService: AuthenticationService;

	constructor(
		private authService: AuthenticationService
	) {
		this.authenticationService = authService;
	}

	title = 'friends';
}
