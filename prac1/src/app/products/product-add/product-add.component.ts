import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { prod } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private _prod: ProductsService, private _router: Router) { }

  ngOnInit() {
  }
  selectedFile: File = null;
  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
  }
  onCancel() {
    this._router.navigate(['products']);
  }
  onSubmit(f) {
    console.log(f.value);
    let fd = new FormData();
    console.log(fd);
    fd.append('product_name', f.value.product_name);
    fd.append('product_price', f.value.product_price);
    fd.append('product_qty', f.value.product_qty);
    fd.append('product_mfg', f.value.product_mfg);
    fd.append('product_desc', f.value.product_desc);
    fd.append('product_img', this.selectedFile, this.selectedFile.name);

    fd.append('fk_cat_id', f.value.fk_cat_id);
    console.log();
    this._prod.addProductData(fd).subscribe(
      (data: prod) => {
   this._router.navigate(["products"]);
      }
    );
  }


}
