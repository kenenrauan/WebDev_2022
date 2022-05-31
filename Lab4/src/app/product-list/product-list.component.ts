// import { Component } from '@angular/core';
import { Component, Input, OnInit} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // @Input() declare product: typeof products;
  product = products
  // share() {
  //   window.alert('The product has been shared!');
  // }
  // ngOnInit(): void {}
  getShareLink(link: string): string {
    return `https://t.me/share/url?url=${
      link
    }&text=${"Hi! Look what I've found on the Amazon."}`;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
