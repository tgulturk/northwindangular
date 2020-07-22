import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './pages/account/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "product",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () => import('./pages/account/account.module').then(t => t.AccountModule)
  },
  {
    path: "",
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/product/product.module').then(t => t.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
