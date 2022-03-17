import { Injectable } from '@angular/core';
import { Product } from '../models/product';

/* Esse valor "root" quer dizer que esse serviço será visivel a partir do módulo principal */
@Injectable( {
    providedIn: 'root'
})
export class ApiProductsService {
  
  private products: Product[] = [
  {
    name: 'iPhone',
    price: 3500
  },
  {
    name: 'Tablet',
    price: 4000
  },
  {
    name: 'Notebook',
    price: 7000
  }

]

  recoverProducts(): Product[] {
    return this.products
      
  }

  deleteProducts(id: number): void {
    this.products.splice(id, 1)
  }
}
