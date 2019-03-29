import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDivComponent } from './body-div.component';

describe('BodyDivComponent', () => {
  let component: BodyDivComponent;
  let fixture: ComponentFixture<BodyDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
