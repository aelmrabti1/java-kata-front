import { Injectable, signal } from '@angular/core';
import { Product } from '../data-access/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  initialState: CartState = {
    products: [],
  };

  private _cartState = signal<CartState>(this.initialState);

  constructor() {}

  get cart() {
    return this._cartState().products;
  }

  addProduct(product: Product) {
    const updatedProducts = [...this.cart, product];
    this._cartState.set({ products: updatedProducts });
  }

  removeProduct(product: Product) {
    const updatedProducts = this.cart.filter((p) => p.id !== product.id);
    this._cartState.set({ products: updatedProducts });
  }
}

type CartState = {
  products: Product[];
};
