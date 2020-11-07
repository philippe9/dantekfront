import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  message(decision) {

  }
}

