import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { LanguageFormComponent } from './components/language-form/language-form.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';



@NgModule({
  declarations: [DetailsModalComponent, MessageModalComponent, LanguageFormComponent, ConfirmModalComponent, LanguageCardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
