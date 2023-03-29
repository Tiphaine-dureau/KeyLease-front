import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFixtureInventoryComponent } from './update-fixture-inventory.component';

describe('UpdateFixtureInventoryComponent', () => {
  let component: UpdateFixtureInventoryComponent;
  let fixture: ComponentFixture<UpdateFixtureInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFixtureInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFixtureInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
