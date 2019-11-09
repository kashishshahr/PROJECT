import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { signUpClass } from '../signup/signup';
import { prod } from '../products/product';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

  name: string = "";
  img: any = "";
  price: any = "";
  desc:any="";
  constructor(public dialogRef: MatDialogRef<ViewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: prod, ) { }
  onCancelClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.name = this.data.product_name;
    this.img = this.data.product_img;
    this.price = this.data.product_price;
    this.desc=this.data.product_desc;
  }
}
