import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './user';
import { USERS_CHILD } from './database-constants';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
  }
}
