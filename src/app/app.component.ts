import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routingComponents } from './app-routing.module';
import { NewpcComponent } from './newpc/newpc.component';
import { NewpcnoobComponent } from './newpcnoob/newpcnoob.component';
import { Router, RouterOutlet } from '@angular/router';
import { NouvelOrdinateurComponent } from './nouvel-ordinateur/nouvel-ordinateur.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototype';

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

  ngOnInit(){
    AOS.init();
    }

  /*constructor(private dialogRef : MatDialog){}

    openDialog(){
      this.dialogRef.open(NewpcComponent,{
        width: '98vw', //sets width of dialog
        height:'70vh', //sets width of dialog
        maxWidth: '90vw', //overrides default width of dialog
        maxHeight: '100vh', //overrides default height of dialog
        disableClose: true, //disables closing on clicking outside box. You will need to make a dedicated button to close
        data : {
          name : 'Peter'
        }
      });
    }
    closeDialog() {
      this.dialogRef.closeAll;
    }

    openDialog2(){
      this.dialogRef.open(NewpcnoobComponent,{
        width: '50vw', //sets width of dialog
        height:'50vh', //sets width of dialog
        maxWidth: '75vw', //overrides default width of dialog
        maxHeight: '75vh', //overrides default height of dialog
        disableClose: true, //disables closing on clicking outside box. You will need to make a dedicated button to close
        data : {
          name : 'Peter'
        }
      });
    }
    */
}
