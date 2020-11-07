import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TextLangue, Competence } from '../../model/data_model';
import { CommunicationService } from '../../helpers/communication';

declare var jQuery: any;
@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {
  @Input() textLangue: TextLangue;
  @Input() competence: Competence;

  @Output() closeEmitter = new EventEmitter();
  // com = new Communication();
  constructor(private com: CommunicationService) {

  }

  ngOnInit(): void {
    this.com.getMessage().subscribe((message) => {
      console.log(message);
      if (message.state === 'Open Modal Details') {
        jQuery('#detailsModal').modal('show');
      }
      // this.com.clearMessage();
    });
    jQuery('#detailsModal').on('hidden.bs.modal', (e) => {
      // do something...
      this.closeEmitter.emit(true);
    });
  }

}
