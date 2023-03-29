import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureInventoryDetailComponent } from './fixture-inventory-detail.component';

describe('FixtureInventoryDetailComponent', () => {
  let component: FixtureInventoryDetailComponent;
  let fixture: ComponentFixture<FixtureInventoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureInventoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureInventoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
