import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextLangue, Competence, AutreLangue } from '../../model/data_model';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  @Input() textLangue: TextLangue;
  @Input() competence: Competence;
  @Input() langueCompetences: Competence[];
  @Input() languesDispo: AutreLangue[];

  @Output() competenceEx = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      alert('Remplir tous les champs obligatoires');
    } else {
      this.competenceEx.emit(this.competence);
    }
  }
}
