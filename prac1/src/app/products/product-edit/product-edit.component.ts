import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private _product:ProductsService,private _act:ActivatedRoute,private _router:Router) { }
  product_id:number;
   product_name:string;
   product_price:number;
    product_qty:number;
    product_mfg:Date;
   product_desc:Text;
   product_img:File;
   fk_cat_id:number;
  ngOnInit() {
    console.log("in prod edit");
    this.product_id=this._act.snapshot.params['product_id'];

    console.log(this.product_id);
    this._product.getproductById(this.product_id).subscribe(
      (data:any)=>
      {
  console.log(data);
  this.product_id=data[0].product_id;
  this.product_name=data[0].product_name;
  this.product_price=data[0].product_price;
  this.product_qty=data[0].product_qty;
  this.product_mfg=data[0].product_mfg;
  this.product_desc=data[0].product_desc;
  this.product_img=data[0].product_img;
  this.fk_cat_id=data[0].product_fk_cat_id;
      }
    );
  }
  selectedfile:File=null;
  onChange(value){
    this.selectedfile=<File>value.target.files[0];
  }
  onSubmit(f){
    this._product.updateProductData(f.value).subscribe(
      (data:any)=>{
this._router.navigate(['products']);
      }
    )
  }
  onCancel(){
    this._router.navigate(['products']);
  }
}
