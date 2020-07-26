import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMovablePropComponent } from './manage-movable-prop.component';

describe('ManageMovablePropComponent', () => {
  let component: ManageMovablePropComponent;
  let fixture: ComponentFixture<ManageMovablePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMovablePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMovablePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
