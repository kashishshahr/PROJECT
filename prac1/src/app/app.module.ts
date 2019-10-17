import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { SignupAddComponent } from './signup/signup-add/signup-add.component';
import { SignupEditComponent } from './signup/signup-edit/signup-edit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { routingArr } from './app.routing';
import { MatCheckboxModule,MatPaginatorModule,MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatDialogModule, MatCardModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';
import { ViewmoreComponent } from './viewmore/viewmore.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupDisplayComponent,
    SignupAddComponent,
    SignupEditComponent,
    MainNavComponent,
    ViewmoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,

    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    routingArr,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,

    FormsModule
  ],
  entryComponents:[
    ViewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
