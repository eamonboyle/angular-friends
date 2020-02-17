import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent implements OnInit {
  @Input() friendUid: string;
  
  uid: string;
  newMessage: string;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.uid = this.userService.getSavedUser().getValue().uid;
  }

  sendMessage() {
    console.log('Send chat message');
  }

}
