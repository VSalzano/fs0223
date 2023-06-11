import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  product: Partial<Product> = {
    name: '',
    price: 0,
  };

  constructor(
    private dashboardSvc: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.dashboardSvc.getSingleProduct(params.id).subscribe((data) => {
        this.product = data;
      });
    });
  }

  edit() {
    this.dashboardSvc.put(this.product).subscribe((data) => {
      console.log(data);
      this.router.navigate(['pages/dashboard']);
    });
  }
}
