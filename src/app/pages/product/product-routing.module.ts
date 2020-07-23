import { ProductSaveComponent } from './product-save/product-save.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "product", component: ProductComponent
  },
  {
    path: "product/:categoryId", component: ProductComponent
  },
  {
    path: "product-save", component: ProductSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
