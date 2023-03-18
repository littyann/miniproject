import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefnComponent } from './singlefn.component';

describe('SinglefnComponent', () => {
  let component: SinglefnComponent;
  let fixture: ComponentFixture<SinglefnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
