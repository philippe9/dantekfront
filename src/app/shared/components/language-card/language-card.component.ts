import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competence } from '../../model/data_model';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css']
})
export class LanguageCardComponent implements OnInit {
  @Input() competence: Competence;
  @Input() index: number;
  @Output() detailsEmmit = new EventEmitter();
  @Output() updateEmmit = new EventEmitter();
  @Output() deleteEmmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitDetails() {
    this.detailsEmmit.emit(this.competence);
  }

  emitUpdate() {
    this.updateEmmit.emit(this.competence);
  }

  emitDelete() {
    this.deleteEmmit.emit(this.competence);
  }
}
