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

  delete(id: number | undefined) {
    this.dashboardSvc.delete(id).subscribe((data) => {
      console.log(data);
      let index = this.productsArr.findIndex((p) => p.id == id);
      this.productsArr.splice(index, 1);
    });
  }
}
