import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LeaseContractDetailComponent} from './lease-contract-detail.component';

describe('LeaseContractsDashboardComponent', () => {
  let component: LeaseContractDetailComponent;
  let fixture: ComponentFixture<LeaseContractDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaseContractDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeaseContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
