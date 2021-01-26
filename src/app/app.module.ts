import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './views/home/home.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product/product-details/product-details.component';
import { ProductFormComponent } from './views/product/product-form/product-form.component';
import { SideNavComponent } from './views/side-nav/side-nav.component';
import { AboutUsComponent } from './views/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    SideNavComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
