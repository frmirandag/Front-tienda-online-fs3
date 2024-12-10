// carrito.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  /**
   * Carga los elementos del carrito desde el almacenamiento local.
   */
  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  /**
   * Guarda los elementos del carrito en el almacenamiento local.
   */
  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  /**
   * Añade un producto al carrito.
   * @param product El producto que se va a añadir al carrito.
   */
  addToCart(product: any): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++; // Incrementa la cantidad si ya existe en el carrito
    } else {
      this.cart.push({...product, quantity: 1}); // Agrega el producto con una cantidad inicial de 1
    }
    this.saveCart();
  }

  /**
   * Obtiene los elementos del carrito.
   * @returns Un array de elementos del carrito.
   */
  getCart(): any[] {
    return this.cart;
  }

  /**
   * Elimina un elemento del carrito.
   * @param product El producto que se va a eliminar del carrito.
   */
  removeFromCart(product: any): void {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  /**
   * Limpia todos los elementos del carrito.
   */
  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
