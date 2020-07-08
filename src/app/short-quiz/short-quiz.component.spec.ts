import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortQuizComponent } from './short-quiz.component';

describe('ShortQuizComponent', () => {
  let component: ShortQuizComponent;
  let fixture: ComponentFixture<ShortQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
