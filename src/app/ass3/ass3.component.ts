import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['../ass1/ass1.component.css']
})
export class Ass3Component implements OnInit {

  constructor() { }

 items:Array<string>;
 ismenter:boolean = false;
 ismleave:boolean = false;
  ngOnInit() {
    /*INITIAALIZING ARRAY*/
    this.items = ["Akshay","Atish","Mayank","Ashir","Manish"];
  }
MouseEnter(index){
  /*checking odd or even*/
  if(index % 2 == 0){
    document.getElementById(index).style.color = 'green';
  }else{
    document.getElementById(index).style.color = 'red';
  }
}
MouseLeave(index){
   document.getElementById(index).style.color = 'black';
}
}
