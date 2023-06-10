import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  productsArr: Product[] = [];

  constructor(private dashboardSvc: DashboardService) {}

  ngOnInit() {
    this.dashboardSvc.getAll().subscribe((data) => (this.productsArr = data));
  }
}
