import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'product',
  templateUrl: './api-product.component.html',
  styleUrls: ['./api-product.component.css'],
  /* providers: [ApiProductsService] */
})
export class ApiProductComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productService: ApiProductsService
  ) { } /* realizando a injeção de dependência */

  ngOnInit(): void {
    this.products = this.productService.recoverProducts()

    console.log(this.products)
  }

  delete(id: number) {
    this.productService.deleteProducts(id)
    this.products = this.productService.recoverProducts() /* Após deletar, ele pega os dados atualizados da API, 
    para aparecer corretamente  */
  }

}
