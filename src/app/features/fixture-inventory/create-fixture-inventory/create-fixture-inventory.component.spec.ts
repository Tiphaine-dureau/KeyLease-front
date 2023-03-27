import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixtureInventoryComponent } from './create-fixture-inventory.component';

describe('CreateFixtureInventoryComponent', () => {
  let component: CreateFixtureInventoryComponent;
  let fixture: ComponentFixture<CreateFixtureInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFixtureInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFixtureInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
