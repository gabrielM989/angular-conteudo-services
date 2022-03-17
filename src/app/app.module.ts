import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ApiProductComponent } from './components/api-product/api-product.component';
import { ApiProductsService } from './services/api-products.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    /* ApiProductsService */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
