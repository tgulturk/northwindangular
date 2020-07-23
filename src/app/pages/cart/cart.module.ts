import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';


@NgModule({
  declarations: [CartSummaryComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    CartSummaryComponent
  ]
})
export class CartModule { }
