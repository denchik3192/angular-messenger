
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';


import { BaseConversationModel, SelectedConversationModel } from '../../model/conversation.model';
import { MessageSendRequestModel } from '../../model/message.model';
import { ChatService } from '../../servises/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  selectedConversation: SelectedConversationModel | undefined;
  conversationList: BaseConversationModel[] = this.chatServise.getConversationList();
  currentUser: UserModel = this.userServise.getCurrentUser();

  constructor (private route: ActivatedRoute,
     private chatServise: ChatService,
     private userServise: UserService) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const conversationId = params['id'];

      if (conversationId) {
        this.onSelectConversation(conversationId)
      }

    });
    console.log();

  }

  onSelectConversation(id: string) {
    this.selectedConversation = this.chatServise.selectConversation(id);
  }

  onPostMessage(newMessage: MessageSendRequestModel) {
    this.selectedConversation?.messages.push({
      recipient: newMessage.recipient,
      sender: this.currentUser?.id,
      timestamp: new Date().toISOString(),
      message: newMessage.message,
      id: '111222',
    },)
  }

}
