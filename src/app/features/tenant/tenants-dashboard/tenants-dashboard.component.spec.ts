import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TenantsDashboardComponent} from './tenants-dashboard.component';

describe('TenantComponent', () => {
  let component: TenantsDashboardComponent;
  let fixture: ComponentFixture<TenantsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantsDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TenantsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
