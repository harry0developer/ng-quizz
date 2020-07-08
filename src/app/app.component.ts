import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  AfterViewInit {
  title = 'word2html';
  checked: false;
  indeterminate;
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    

  }
  
 
  ngAfterViewInit() {
 
  }
 
}
