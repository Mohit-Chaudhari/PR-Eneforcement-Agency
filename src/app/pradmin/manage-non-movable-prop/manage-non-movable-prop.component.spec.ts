import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNonMovablePropComponent } from './manage-non-movable-prop.component';

describe('ManageNonMovablePropComponent', () => {
  let component: ManageNonMovablePropComponent;
  let fixture: ComponentFixture<ManageNonMovablePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNonMovablePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNonMovablePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
