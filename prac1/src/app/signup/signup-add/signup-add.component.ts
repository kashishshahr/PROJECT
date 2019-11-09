import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignupSService } from '../signup-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-add',
  templateUrl: './signup-add.component.html',
  styleUrls: ['./signup-add.component.css']
})
export class SignupAddComponent implements OnInit {


  constructor(private _sign: SignupSService, private _route: Router) { }
  selectedFile: File = null;
  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  submitted: boolean = false;
  onSignupAdd(f) {
    this.submitted = true;
    let fd = new FormData();
    fd.append('Name', f.value.name);
    fd.append('Email', f.value.email);
    fd.append('Password', f.value.password);
    fd.append('Mobno', f.value.mobno);
    console.log(f.value);
    this._sign.addSignUpData(f.value).subscribe(
      (data: any[]) => {
        console.log(data);
        this._route.navigate(['signup']);
      }
    );
  }
}
