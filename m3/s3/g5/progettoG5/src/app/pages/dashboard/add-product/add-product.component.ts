import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  constructor(private dashboardSvc: DashboardService) {}

  product: Product = new Product('', '', 0);
  productArr: Product[] = [];

  create() {
    this.dashboardSvc.newProduct(this.product).subscribe((data: Product) => {
      this.productArr.push(data);
      window.location.reload();
    });
  }
}
