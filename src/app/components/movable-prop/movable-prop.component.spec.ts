import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovablePropComponent } from './movable-prop.component';

describe('MovablePropComponent', () => {
  let component: MovablePropComponent;
  let fixture: ComponentFixture<MovablePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovablePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovablePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
