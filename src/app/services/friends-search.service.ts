import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FRIENDS_CHILD, USER_DETAILS_CHILD } from './database-constants';
import { User } from './user';

@Injectable()
export class FriendsSearchService {

    constructor(
        private db: AngularFireDatabase
    ) { }

    getSearchFriends(start, end): Observable<User[]> {
        return this.db.list<User>('/users',
            ref => ref.orderByChild('name').limitToFirst(10).startAt(start).endAt(end)
        ).valueChanges();
    }

}