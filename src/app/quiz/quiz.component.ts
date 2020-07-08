import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TrueFalseQuizComponent } from '../true-false-quiz/true-false-quiz.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questionType: 'short' | 'mcq' | 'true/false' | 'dragdrop' = null;
  singleQuestion;
  multipleQuestion;
  componentRef: any;

  @ViewChild('trueFalseContainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(questionType) {
      // this.entry.clear();
      const trueFalseComponent = this.resolver.resolveComponentFactory(TrueFalseQuizComponent); 
      this.componentRef = this.entry.createComponent(trueFalseComponent);
      this.componentRef.instance.questionType = questionType;
  }
  
  destroyComponent() {
      this.componentRef.destroy();
  }

  ngOnInit(): void {
  }
 

  generateQuiz() {
    console.log(this.entry);
    
  }

}
