import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './views/product/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product/product-details/product-details.component';
import { ProductFormComponent } from './views/product/product-form/product-form.component';
import { AboutUsComponent } from './views/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'product/:mode/:id', component: ProductFormComponent},
  { path: 'product/:mode', component: ProductFormComponent},
  { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
