import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  show = false;
  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    
  }
  

}
