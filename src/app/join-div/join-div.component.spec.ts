import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDivComponent } from './join-div.component';

describe('JoinDivComponent', () => {
  let component: JoinDivComponent;
  let fixture: ComponentFixture<JoinDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
