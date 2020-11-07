import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModalComponent } from './details-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CorePrototype } from '../../../core/services/core.prototype';
import { CommunicationService } from '../../helpers/communication';

describe('DetailsModalComponent', () => {
  let component: DetailsModalComponent;
  let fixture: ComponentFixture<DetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsModalComponent ],
      imports: [HttpClientModule],
      providers: [CommunicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
