import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModalComponent } from './confirm-modal.component';
import { CommunicationService } from '../../helpers/communication';
import { HttpClientModule } from '@angular/common/http';

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmModalComponent ],
      imports: [HttpClientModule],
      providers: [CommunicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
