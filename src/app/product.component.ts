import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './product.component.html',
  styleUrls: ['./app.component.css'],
})
export class ProductComponent {
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() productPrice: string;
}
