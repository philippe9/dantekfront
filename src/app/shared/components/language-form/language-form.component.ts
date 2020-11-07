import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    console.log(form);
  }
}
