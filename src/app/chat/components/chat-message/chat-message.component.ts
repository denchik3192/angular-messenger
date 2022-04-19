import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from '../../../core/models/user.model';

import { ConversationMessageModel } from '../../model/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ConversationMessageModel | undefined;
  @Input() user: UserModel | undefined;
  @Input() currentUser: UserModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
