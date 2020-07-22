import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  subs: Subscription[] = [];

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(route => {

      let categoryId = route["categoryId"];
      this.getProducts(categoryId);
    })
  }

  ngOnDestroy(): void {

    this.subs.forEach(function (value) {
      value.unsubscribe();
    });
  }


  getProducts(categoryId?: number) {
    if (categoryId) {
      this.subs.push(this.productService.getListByCategoryId(categoryId).subscribe((data) => (this.products = data)));
    }
    else {
      this.subs.push(this.productService.getAll().subscribe((data) => (this.products = data)));
    }
  }

}
