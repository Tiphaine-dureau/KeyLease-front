import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureInventoryFormComponent } from './fixture-inventory-form.component';

describe('FixtureInventoryFormComponent', () => {
  let component: FixtureInventoryFormComponent;
  let fixture: ComponentFixture<FixtureInventoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureInventoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureInventoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
