import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-oldpc',
  templateUrl: './oldpc.component.html',
  styleUrls: ['./oldpc.component.css']
})
export class OldpcComponent implements OnInit {

  username = "";

  valid = true;

  mamaSmoke() {
    this.username == "";
  } 

  papaSmoke() {
    if (this.username == "") {
      return true
    }
    else {
      return false;
    }
  }

  reset() {
    this.username = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
