import { CartModule } from './pages/cart/cart.module';
import { ProductModule } from './pages/product/product.module';
import { AccountModule } from './pages/account/account.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
registerLocaleData(tr);
import { NZ_I18N, tr_TR } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    MenuComponent,
    MainLayoutComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    ProductModule,
    CartModule,
    BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent],
})
export class AppModule { }
