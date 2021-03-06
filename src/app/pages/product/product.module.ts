import { SharedModule } from './../../core/shared/shared.module';
import { MainLayoutComponent } from './../../layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductComponent, ProductSaveComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class ProductModule { }
