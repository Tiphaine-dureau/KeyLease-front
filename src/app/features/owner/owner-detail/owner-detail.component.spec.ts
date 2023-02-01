import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OwnerDetailComponent} from './owner-detail.component';

describe('OwnerDetailsComponent', () => {
  let component: OwnerDetailComponent;
  let fixture: ComponentFixture<OwnerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OwnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
