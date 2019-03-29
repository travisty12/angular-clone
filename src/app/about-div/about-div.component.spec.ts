import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDivComponent } from './about-div.component';

describe('AboutDivComponent', () => {
  let component: AboutDivComponent;
  let fixture: ComponentFixture<AboutDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
