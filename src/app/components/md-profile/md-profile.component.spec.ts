import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdProfileComponent } from './md-profile.component';

describe('MdProfileComponent', () => {
  let component: MdProfileComponent;
  let fixture: ComponentFixture<MdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
