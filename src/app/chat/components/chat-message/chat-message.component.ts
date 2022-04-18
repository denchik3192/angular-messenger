import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from '../../../core/models/user.model';
import { currentUserMock } from '../../../shared/mocks/current-user.mock';
import { ConversationMessageModel } from '../../model/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ConversationMessageModel | undefined;
  @Input() user: UserModel | undefined;

  currentUser = currentUserMock;

  constructor() { }

  ngOnInit(): void {
  }

}
