import { Route, Routes, RouterModule } from "@angular/router";
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { SignupAddComponent } from './signup/signup-add/signup-add.component';
import { SignupEditComponent } from './signup/signup-edit/signup-edit.component';

const arr:Routes=[
  {path:'',component:SignupDisplayComponent},
  {path:'signup',component:SignupDisplayComponent},
  {path:'signupAdd',component:SignupAddComponent},
  {path:'signupEdit',component:SignupEditComponent}

];
export const routingArr=RouterModule.forRoot(arr);
