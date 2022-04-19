import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { SelectedConversationModel } from '../../model/conversation.model';
import { ConversationMessageModel, MessageSendRequestModel } from '../../model/message.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() selectedConversation: SelectedConversationModel | undefined;
  @Input() currentUser:UserModel | undefined;
  @Output() postMessage = new EventEmitter<MessageSendRequestModel>();

  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getUser(message: ConversationMessageModel) {
    return this.selectedConversation?.participants.find(user => user.id === message.sender);
  }

  onPostMessage() {
    this.postMessage.emit({
      message: this.newMessage,
      recipient: this.selectedConversation?.participants[1].id || ''
    });
    this.newMessage = '';
  }

}
