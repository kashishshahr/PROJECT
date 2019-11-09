import { Component, OnInit, ViewChild } from '@angular/core';
import { prod } from '../product';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ViewmoreComponent } from 'src/app/viewmore/viewmore.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  proArr: prod[] = [];

  displayedColumns: string[] = [ 'fk_cat_id','name', 'qty', 'price', 'action', 'viewmore'];
  dataSource: MatTableDataSource<prod>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _router: Router, private _prod: ProductsService, public dialog: MatDialog) {
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
  prod_table: prod[] = [];
  ngOnInit() {

    this._prod.getAllProduct().subscribe(
      (data: prod[]) => {
        this.proArr = data;
        this.prod_table = data;
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

    this._prod.deleteProductData(item.product_id).subscribe(
      (data: any) => {
        console.log("in delete");
        this.prod_table.splice(item, 1);
        this.dataSource.data = this.prod_table;
        this._router.navigate(['products']);
      }
    )

  }
  j: number;
  i: number;
  selecteditems: prod[] = [];
  selectflag: boolean = false;
  k: number[] = [1, 2, 3];
  onCheck(item, id) {
    this.selectflag = true;
    console.log("in oncheck");
    // let x: number = this.selecteditems.indexOf(item);
    //if (this.selectflag == true) {
    if (this.selecteditems.includes(item)) {
      this.selecteditems.splice(this.selecteditems.indexOf(item), 1);
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
    this._router.navigate(['prodAdd']);
  }
  onDeleteSelectedItems() {
    for (this.i = 0; this.i < this.selecteditems.length; this.i++) {
      this._prod.deleteProductData(this.selecteditems[this.i].product_id).subscribe(
        (data: any) => {
          console.log(data);
          this.item1 = this.selecteditems[this.i];
          //this.user_table.splice(this.item1, 1);
          this.selecteditems.splice(this.item1, 1);
          //this.dataSource.data = this.user_table;
          this._router.navigate(['signup']);
        });
    }
    console.log(this.selecteditems[0].product_id);
  }
  onEdit(item) {

    this._router.navigate(['productEdit',item.product_id]);
  }
  onAdd() {
    this._router.navigate(['productAdd']);
  }

}
