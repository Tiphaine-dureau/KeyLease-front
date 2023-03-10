import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OwnersDashboardComponent} from './owners-dashboard.component';

describe('OwnerComponent', () => {
  let component: OwnersDashboardComponent;
  let fixture: ComponentFixture<OwnersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnersDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OwnersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
