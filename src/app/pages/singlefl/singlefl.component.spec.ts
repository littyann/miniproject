import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleflComponent } from './singlefl.component';

describe('SingleflComponent', () => {
  let component: SingleflComponent;
  let fixture: ComponentFixture<SingleflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleflComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
