import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Ürünler";
  products: Product[] = [];

  subs: Subscription[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnDestroy(): void {

    this.subs.forEach(function (value) {
      value.unsubscribe();
    });
  }


  getAllProducts() {

    this.subs.push(this.productService.getAll().subscribe((data) => (this.products = data)));
  }

}
