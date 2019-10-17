import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupSService {
private url:string="http://localhost:3000/signup/";
  constructor(private _http:HttpClient,private route:Router) { }

  getAllSignUpData(){
   return this._http.get(this.url);
  }
  addSignUpData(item){
    let x = new HttpHeaders().set('Content-type', 'application/json');
    let body=JSON.stringify(item)
    return this._http.post(this.url,body,{headers:x});
  }
  deleteSignupData(id){

    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.delete(this.url + id, { headers: x });
  }

}
