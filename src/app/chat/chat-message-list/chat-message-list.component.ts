import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user';
import { Friend } from 'src/app/services/friend';
import { Message } from 'src/app/services/message';

@Component({
	selector: 'app-chat-message-list',
	templateUrl: './chat-message-list.component.html',
	styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {
	@Input() friendUid: string;
	@ViewChild('scrollContainer', null) private scrollContainer: ElementRef;
	user: User;
	key: string;
	messages: Message[];

	constructor(
		private messageService: MessageService,
		private userService: UserService,
		private cdRef: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.user = this.userService.getSavedUser().getValue();
		this.messageService.isMessagePresent(this.user.uid, this.friendUid).subscribe(snapshot => {
			let friend: Friend;
			if (snapshot == null) {
				this.key = this.messageService.freshlyCreateChatIDEntry(this.user.uid, this.friendUid);
			}
			else {
				this.key = snapshot.key;
			}
			this.messageService.setKey(this.key);
			this.subscribeMessages();
		});
	}
	subscribeMessages() {
		this.messageService.getMessages(this.key)
			.subscribe(
				messages => {
					this.messages = messages;
				}
			)
	}

	ngAfterViewChecked() {
		this.scrollToBottom();
		this.cdRef.detectChanges();
	}

	scrollToBottom(): void {
		try {
			this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
		} catch (err) {
			console.log(err);
		}
	}

}
