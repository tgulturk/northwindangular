import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../core/models/product';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../core/models/category';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  model: Product = {
    imageUrl: "https://dummyimage.com/100x100/6b6b6b/ffff05.png"
  };
  subs: Subscription;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.subs = this.categoryService.getAll().subscribe(data => this.categories = data);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  saveProduct(frmProduct: NgForm) {
    if (frmProduct.valid) {
      this.productService.addProduct(this.model).subscribe(data => {
        this.router.navigate(['/product']).then(() => {
          this.notification.success("Başarılı", "Ürün Başarıyla Eklendi.");
        });
      },
        err => {
          this.notification.error("HATA", "Ürün eklenirken hata alındı.");
        })
    }
  }

}
