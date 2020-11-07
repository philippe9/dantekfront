import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePrototype } from './services/core.prototype';
import { CommunicationService } from '../shared/helpers/communication';



@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [CorePrototype, CommunicationService]
})
export class CoreModule { }
