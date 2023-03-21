import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaseContractComponent } from './create-lease-contract.component';

describe('CreateLeaseContractComponent', () => {
  let component: CreateLeaseContractComponent;
  let fixture: ComponentFixture<CreateLeaseContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLeaseContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLeaseContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
