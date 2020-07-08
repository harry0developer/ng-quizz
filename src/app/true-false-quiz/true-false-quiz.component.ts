import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-true-false-quiz',
  templateUrl: './true-false-quiz.component.html',
  styleUrls: ['./true-false-quiz.component.scss']
})
export class TrueFalseQuizComponent {

  @Input() questionType: string = '';
  singleQuestion = true;

  
  remove: boolean = false;

  constructor(private el: ElementRef) { }

  removeComponent() {
    this.el.nativeElement.hidden = true;
   }

}
