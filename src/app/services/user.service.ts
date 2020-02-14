import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './user';
import { USERS_CHILD } from './database-constants';
import 'firebase/storage';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private subject: BehaviorSubject<User> = new BehaviorSubject(null);

	constructor(private fireDb: AngularFireDatabase) { }

	public addUser(user: User): void {
		this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
		this.saveUser(user);
	}

	public getUser(uid: string): Observable<User> {
		return this.fireDb.object<User>(`${USERS_CHILD}/${uid}`).valueChanges();
	}

	public saveUser(user: User) {
		this.subject.next(user);
	}

	public getSavedUser(): BehaviorSubject<User> {
		return this.subject;
	}

	public updateEmail(user: User, email: string): void {
		this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({
			email: email
		});
		this.saveUser(user);
	}

	public updateMobile(user: User, mobile: string) : void {
		this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({
			mobile: mobile
		});
		this.saveUser(user);
	}
}
