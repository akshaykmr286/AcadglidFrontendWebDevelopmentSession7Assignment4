import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['../ass1/ass1.component.css']
})
export class Ass2Component implements OnInit {

  constructor() { }
items:Array<string>;
  ngOnInit() {
    /*INITIAALIZING ARRAY*/
    this.items = ["Akshay","Atish","Mayank","Ashir","Manish"];
  }

}
