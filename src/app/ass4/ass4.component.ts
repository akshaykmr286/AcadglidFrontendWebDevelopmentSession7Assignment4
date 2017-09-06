import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass4',
  templateUrl: './ass4.component.html',
  styleUrls: ['../ass1/ass1.component.css']
})
export class Ass4Component implements OnInit {

  constructor() { }
  items:Array<string>;
 ismenter:boolean = false;
 ismleave:boolean = false;
 color;
 selectedindex;
  ngOnInit() {
    /*INITIAALIZING ARRAY*/
    this.items = ["Akshay","Atish","Mayank","Ashir","Manish"];
    this.color = 'black';
  }
MouseEnter(index){
  this.selectedindex = index;
  /*checking odd or even*/
  if(index % 2 == 0){
    this.color = 'green';
  }else{
    this.color = 'red';
  }
}
MouseLeave(index){
    this.color = 'black';
}
}
