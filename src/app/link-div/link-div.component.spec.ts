import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDivComponent } from './link-div.component';

describe('LinkDivComponent', () => {
  let component: LinkDivComponent;
  let fixture: ComponentFixture<LinkDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
