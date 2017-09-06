import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css']
})
export class Ass1Component implements OnInit {

  constructor(private router:Router) { }

  title:string;
  fname:string;
  lname:string;
  showTitle:boolean = false;
  ngOnInit() {
    /*to check if the show title butti=on clicked*/
    if(this.showTitle){
      this.title = 'Mr.';
    }
    this.fname ='Akshay';
    this.lname = 'Nayak';
  }
/*  onSubmit(formdata:any){
  this.fname = formdata.fname;
  this.lname = formdata.lname;
}*/
showTitleFn(){
  this.showTitle = true;
}
}
