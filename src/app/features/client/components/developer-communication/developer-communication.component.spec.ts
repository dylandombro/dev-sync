import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCommunicationComponent } from './developer-communication.component';

describe('DeveloperCommunicationComponent', () => {
  let component: DeveloperCommunicationComponent;
  let fixture: ComponentFixture<DeveloperCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
