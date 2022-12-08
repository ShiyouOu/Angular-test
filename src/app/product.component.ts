import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[my-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./app.component.css'],
})
export class ProductComponent {
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() productPrice: string;

  deleteProduct() {}
}
