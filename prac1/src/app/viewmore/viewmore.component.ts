  import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { signUpClass } from '../signup/signup';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

  name: string = "";
  constructor(public dialogRef: MatDialogRef<ViewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: signUpClass, ) { }
  onCancelClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.name = this.data.name;
  }
}
