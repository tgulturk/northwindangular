import { ProductComponent } from './product.component';
import { MainLayoutComponent } from './../../layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "product", component: ProductComponent
  },
  {
    path: "product/:categoryId", component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
