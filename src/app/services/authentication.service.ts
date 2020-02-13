import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Authentication service
 *
 */
@Injectable()
export class AuthenticationService {

	constructor(private auth: AngularFireAuth) { }

	public signup(email: string, password: string): Promise<any> {
		return this.auth.auth.createUserWithEmailAndPassword(email, password);
	}

}