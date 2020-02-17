import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-chat-message-list',
	templateUrl: './chat-message-list.component.html',
	styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit, AfterViewChecked {
	@Input() friendUid: string;
	@ViewChild('scrollContainer', null) private scrollContainer: ElementRef;

	constructor(
		private messageService: MessageService,
		private userService: UserService,
		private cdRef: ChangeDetectorRef
	) { }

	ngOnInit() {
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
