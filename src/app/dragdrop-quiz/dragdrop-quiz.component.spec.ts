import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropQuizComponent } from './dragdrop-quiz.component';

describe('DragdropQuizComponent', () => {
  let component: DragdropQuizComponent;
  let fixture: ComponentFixture<DragdropQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
