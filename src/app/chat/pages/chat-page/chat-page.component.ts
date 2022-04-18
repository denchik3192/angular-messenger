import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { currentUserMock } from 'src/app/shared/mocks/current-user.mock';
import { selectedConversationsMock } from 'src/app/shared/mocks/selected-conversations.mock';
import { SelectedConversationModel } from '../../model/conversation.model';
import { MessageSendRequestModel } from '../../model/message.model';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  constructor (private route: ActivatedRoute) {}

  selectedConversation: SelectedConversationModel | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const conversationId = params['id'];

      if (conversationId) {
        this.onSelectConversation(conversationId)
      }

    })

  }

  onSelectConversation(id: string) {
    this.selectedConversation = selectedConversationsMock.find(item => item.id === id);
  }

  onPostMessage(newMessage: MessageSendRequestModel) {
    this.selectedConversation?.messages.push({
      recipient: newMessage.recipient,
      sender: currentUserMock.id,
      timestamp: new Date().toISOString(),
      message: newMessage.message,
      id: '111222',
    },)
  }

}
