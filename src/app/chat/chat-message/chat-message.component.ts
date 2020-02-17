import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/services/message';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-chat-message',
	templateUrl: './chat-message.component.html',
	styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
	@Input() message: Message;

	uid: string;

	constructor(
		private userService: UserService
	) { }

	ngOnInit() {
		this.uid = this.userService.getSavedUser().getValue().uid;
	}

	isReceiver(message: Message) {
		return this.uid === message.receiverUid;
	}

	isSender(message: Message) {
		return this.uid === message.senderUid;
	}

}
