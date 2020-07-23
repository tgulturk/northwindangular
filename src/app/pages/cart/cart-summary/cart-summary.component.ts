import { CartService } from './../../../services/cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  totalTL: number = 0;
  itemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.itemCount = this.cartService.getTotalQuantity();
    this.totalTL = this.cartService.getTotalPrice();
  }

}
