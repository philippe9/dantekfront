import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CorePrototype } from '../../services/core.prototype';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../../../shared/services/request.service';
import { CommunicationService } from '../../../shared/helpers/communication';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
      providers: [CorePrototype, RequestService, CommunicationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
