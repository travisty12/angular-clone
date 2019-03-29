import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDivComponent } from './modal-div.component';

describe('ModalDivComponent', () => {
  let component: ModalDivComponent;
  let fixture: ComponentFixture<ModalDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
