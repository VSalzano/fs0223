import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [DashboardComponent, AddProductComponent, EditProductComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {
  constructor() {}
}
