import { ProductModule } from './pages/product/product.module';
import { AccountModule } from './pages/account/account.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    MenuComponent,
    MainLayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AccountModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
