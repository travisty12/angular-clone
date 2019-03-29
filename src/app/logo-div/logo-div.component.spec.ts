import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDivComponent } from './logo-div.component';

describe('LogoDivComponent', () => {
  let component: LogoDivComponent;
  let fixture: ComponentFixture<LogoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
