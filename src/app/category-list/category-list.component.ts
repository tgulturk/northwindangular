import { CategoryService } from './../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../core/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit, OnDestroy {

  title: string = 'Kategoriler';
  categories: Category[] = [];

  subs: Subscription[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  ngOnDestroy(): void {

    this.subs.forEach(function (value) {
      value.unsubscribe();
    });
  }


  getAllCategories() {

    this.subs.push(this.categoryService.getAll().subscribe((data) => (this.categories = data)));
  }
}
