import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { CHAT_MESSAGES_CHILD, USER_DETAILS_CHILD, MESSAGE_DETAILS_CHILD } from './database-constants';
import { Message } from './message';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	key: string;

	constructor(
		private fireDb: AngularFireDatabase
	) { }

	isMessagePresent(uid: string, friendUid: string): Observable<any> {
		return this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${uid}/${friendUid}`).valueChanges();
	}

	createNewMessage(newMessage: Message) {
		const messageKey = this.fireDb.createPushId();
		this.fireDb.object(`${MESSAGE_DETAILS_CHILD}/${this.key}/${messageKey}`).set(newMessage).catch(error => {
			console.log(error);
		});
	}

	freshlyCreateChatIDEntry(uid: string, friendUid: string): string {
		const key = this.fireDb.createPushId();
		this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${uid}/${friendUid}`).set({ key: key });
		this.fireDb.object(`${USER_DETAILS_CHILD}/${CHAT_MESSAGES_CHILD}/${friendUid}/${uid}`).set({ key: key });
		return key;
	}

	getMessages(key: string): Observable<Message[]> {
		return this.fireDb.list<Message>(`${MESSAGE_DETAILS_CHILD}/${key}`).valueChanges();
	}

	setKey(key: string) {
		this.key = key;
	}
}
