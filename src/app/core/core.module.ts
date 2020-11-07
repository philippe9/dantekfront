import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
