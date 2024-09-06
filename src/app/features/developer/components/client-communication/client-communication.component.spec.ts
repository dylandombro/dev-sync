import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommunicationComponent } from './client-communication.component';

describe('ClientCommunicationComponent', () => {
  let component: ClientCommunicationComponent;
  let fixture: ComponentFixture<ClientCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
