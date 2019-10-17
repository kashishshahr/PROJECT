import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { signUpClass } from '../signup';
import { SignupSService } from '../signup-s.service';
import { Router } from '@angular/router';
import { ViewmoreComponent } from 'src/app/viewmore/viewmore.component';


@Component({
  selector: 'app-signup-display',
  templateUrl: './signup-display.component.html',
  styleUrls: ['./signup-display.component.css']
})
export class SignupDisplayComponent implements OnInit {
  signupArr: signUpClass[] = [];

  displayedColumns: string[] = ['checkColumn', 'name', 'password', 'mobno', 'email', 'action', 'viewmore'];
  dataSource: MatTableDataSource<signUpClass>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _router: Router, private _sign: SignupSService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog(row) {
    this.dialog.open(ViewmoreComponent, {
      data: row
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  user_table: signUpClass[] = [];
  ngOnInit() {

    this._sign.getAllSignUpData().subscribe(
      (data: signUpClass[]) => {
        this.signupArr = data;
        this.user_table = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  deleteallbutton: boolean = false;
  checkflag: boolean = false;
  onCheckAll() {
    if (this.checkflag == false) {
      this.checkflag = true;
    }
    else {
      this.checkflag = false;
    }
    // if (this.deleteallbutton == false) {
    //   this.deleteallbutton = true;
    // }
    // else {
    //   this.deleteallbutton = false;
    // }

    console.log(this.selecteditems);
  }
  flag: boolean = false;
  onDelete(item) {
    this._sign.deleteSignupData(item.id).subscribe(
      (data: any) => {
        this.user_table.splice(item, 1);
        this.dataSource.data = this.user_table;
        this._router.navigate(['signup']);
      }
    )

  }
  j: number;
  i: number;
  selecteditems: signUpClass[] = [];
  selectflag: boolean = false;
  k: number[] = [1, 2, 3];
  onCheck(item, id) {
    this.selectflag = true;
    console.log("in oncheck");
    // let x: number = this.selecteditems.indexOf(item);
    //if (this.selectflag == true) {
    if (this.selecteditems.includes(item)) {
      this.selecteditems.splice(item, 1);
      console.log("includes");
      console.log(item);
    }
    else {
      this.selecteditems.push(item);
    }
    console.log(this.selecteditems);
    //  }
    if (this.deleteallbutton == false) {
      this.deleteallbutton = true;
    }
  }
  item1: any;
  onSignUpCLick() {
    this._router.navigate(['signupAdd']);
  }
  onDeleteSelectedItems() {
    for (this.i = 0; this.i < this.selecteditems.length; this.i++) {
      this._sign.deleteSignupData(this.selecteditems[this.i].id).subscribe(
        (data: any) => {
          console.log(data);
          this.item1 = this.selecteditems[this.i];
          this.user_table.splice(this.item1, 1);
          this.selecteditems.splice(this.item1, 1);
          this.dataSource.data = this.user_table;
          this._router.navigate(['signup']);
        });
    }
    console.log(this.selecteditems[0].id);
  }
  onEdit() {

    this._router.navigate(['signupAdd']);
  }
}
