import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootDivComponent } from './foot-div.component';

describe('FootDivComponent', () => {
  let component: FootDivComponent;
  let fixture: ComponentFixture<FootDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
