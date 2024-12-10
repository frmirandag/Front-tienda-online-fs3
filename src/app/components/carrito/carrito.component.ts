// carrito.component.ts
import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cart: any[] = [];

  constructor(private carritoService: CarritoService) {
    this.loadCart();
  }

  loadCart(): void {
    this.cart = this.carritoService.getCart();
  }

  removeFromCart(item: any): void {
    this.carritoService.removeFromCart(item);
    this.loadCart();
  }

  clearCart(): void {
    this.carritoService.clearCart();
    this.loadCart();
  }

  checkout(): void {
    if (this.cart.length === 0) {
      alert('El carrito está vacío');
    } else {
      alert('Procediendo al pago...');
      // Implementar lógica para procesar el pago aquí
    }
  }

  calculateSubtotal(): number {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  calculateTotal(): number {
    // Implementar lógica para calcular impuestos, envío, descuentos, etc.
    return this.calculateSubtotal();
  }

  // Método para formatear el precio como moneda
  formatCurrency(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
