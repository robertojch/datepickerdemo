import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDatepickerComponent } from './header-datepicker.component';

describe('HeaderDatepickerComponent', () => {
  let component: HeaderDatepickerComponent;
  let fixture: ComponentFixture<HeaderDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
