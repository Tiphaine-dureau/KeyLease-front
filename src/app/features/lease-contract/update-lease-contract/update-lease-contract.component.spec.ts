import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaseContractComponent } from './update-lease-contract.component';

describe('UpdateLeaseContractComponent', () => {
  let component: UpdateLeaseContractComponent;
  let fixture: ComponentFixture<UpdateLeaseContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeaseContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLeaseContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
