import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: any[] = [];

  ngOnInit() {
    this.products.push(['M&M', 'Snack', '$1.99']);
    this.products.push(['Table', 'Furniture', '$199']);
    this.products.push(['Kale', 'Vegetables', '$2.49']);
  }

  clearFields() {
    // Clear the input fields(after adding a new product)
    (<HTMLInputElement>document.getElementById('product-name')).value = '';
    (<HTMLInputElement>document.getElementById('product-category')).value = '';
    (<HTMLInputElement>document.getElementById('product-price')).value = '';
  }

  addProduct() {
    const productName = (<HTMLInputElement>(
      document.getElementById('product-name')
    )).value;
    const productCategory = (<HTMLInputElement>(
      document.getElementById('product-category')
    )).value;
    const productPrice = (<HTMLInputElement>(
      document.getElementById('product-price')
    )).value;

    if (productName == '' || productCategory == '' || productPrice == '') {
      return;
    }

    this.products.push([productName, productCategory, productPrice]);
    this.clearFields();
  }
}
