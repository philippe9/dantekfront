import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../../helpers/communication';
declare var jQuery: any;
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Output() decisionEmitter = new EventEmitter();

  constructor(private com: CommunicationService) {
    this.com.getMessage().subscribe((message) => {
      console.log(message)
      if (message.state === 'Open Modal confirm') {
        jQuery('#confirmModal').modal('show');
      }


    });
  }

  ngOnInit(): void {
  }

  /**
   * Return the decision
   * @param decision Boolean of the decision
   */
  message(decision): void {
    jQuery('#confirmModal').modal('hide');
    this.decisionEmitter.emit(decision);
  }
}

