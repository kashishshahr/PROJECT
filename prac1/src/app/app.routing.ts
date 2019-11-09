import { Route, Routes, RouterModule } from "@angular/router";
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { SignupAddComponent } from './signup/signup-add/signup-add.component';
import { SignupEditComponent } from './signup/signup-edit/signup-edit.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

const arr:Routes=[
  {path:'',component:SignupDisplayComponent},
  {path:'signup',component:SignupDisplayComponent},
  {path:'signupAdd',component:SignupAddComponent},
  {path:'signupEdit',component:SignupEditComponent},
  {path:'products',component:ProductsComponent},
  {path:'productAdd',component:ProductAddComponent},
  {path:'productEdit/:product_id',component:ProductEditComponent}
];
export const routingArr=RouterModule.forRoot(arr);
