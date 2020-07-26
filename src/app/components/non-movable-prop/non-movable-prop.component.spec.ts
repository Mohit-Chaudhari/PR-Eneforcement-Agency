import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMovablePropComponent } from './non-movable-prop.component';

describe('NonMovablePropComponent', () => {
  let component: NonMovablePropComponent;
  let fixture: ComponentFixture<NonMovablePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMovablePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMovablePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
