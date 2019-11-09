import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prod } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = 'http://localhost:3000/product/';
  constructor(private _http: HttpClient, private route: Router) { }

  getAllProduct() {
    return this._http.get(this.url);
  }
  addProductData(item: FormData) {
    console.log(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    // let body=JSON.stringify(item)
    // return this._http.post(this.url,body,{headers:x});

    return this._http.post(this.url, item);
  }
  deleteProductData(id) {
    console.log("in delete");
    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.delete(this.url + id, { headers: x });
  }
  getproductById(id: number) {

    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + id, { headers: x });
  }
  updateProductData(item) {
    // console.log(item);
    let body = JSON.stringify(item);
    // console.log(body);
    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.put(this.url + item.product_id, body, { headers: x });
  }
}
