import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewpcnoobComponent } from '../newpcnoob/newpcnoob.component';


@Component({
  selector: 'app-newpc',
  templateUrl: './newpc.component.html',
  styleUrls: ['./newpc.component.css']
})
export class NewpcComponent implements OnInit {

  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef : MatDialog) {
    this.firstName = data.name
   }
    
  ngOnInit(): void {
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
}
