

import { Component } from '@angular/core';
import { BaseConversationModel, SelectedConversationModel } from './chat/model/conversation.model';
import { MessageSendRequestModel } from './chat/model/message.model';

import { currentUserMock } from './shared/mocks/current-user.mock';
import { selectedConversationsMock } from './shared/mocks/selected-conversations.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-messenger';


}
