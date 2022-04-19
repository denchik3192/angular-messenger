import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseConversationModel } from '../../model/conversation.model';


@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  searchTerm: string = '';

  @Input() list: BaseConversationModel[] = [];
  @Input() selectedConversationId: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectConversation(item: BaseConversationModel) {
    this.selectedConversationId = item.id;
  }

}
