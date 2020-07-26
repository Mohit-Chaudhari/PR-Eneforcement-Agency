import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradminComponent } from './pradmin.component';

describe('PradminComponent', () => {
  let component: PradminComponent;
  let fixture: ComponentFixture<PradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
