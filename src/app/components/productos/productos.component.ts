
import { Component } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';

/**
 * Componente para la gestión de productos.
 * 
 * @description
 * Este componente proporciona la funcionalidad para añadir productos al carrito.
 */
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private carritoService: CarritoService) { }

  addToCart(productId: number): void {
    const product = this.getProductById(productId);
    if (product) {
      this.carritoService.addToCart(product); // Llama al método addToCart del servicio CarritoService
      console.log(`Producto ${productId} añadido al carrito`);
    }
  }

  getProductById(productId: number): any {
    return this.getProductList().find(product => product.id === productId);
  }

  getProductList(): any[] {
    return [
      { id: 1, name: 'Producto 1', description: 'Consolas de Videojuegos SuperGamer Terrible Brigidas.', price: 100, img: 'assets/img/TG1061356_1.webp' },
      { id: 2, name: 'Producto 2', description: 'VideoJuegos Nuevos SuperGamer Ultra Pro Multiplataformas.', price: 200, img: 'assets/img/TG1061356_2.webp' },
      { id: 3, name: 'Producto 3', description: 'Videojuegos y Accesorios Terrible Poco Usados.', price: 150, img: 'assets/img/TG1061356_3.webp' },
      { id: 4, name: 'Producto 4', description: 'Accesorios SuperGamer Originales De Los Modernos.', price: 50, img: 'assets/img/TG1061356_4.webp' }
    ];
  }

  // Método para formatear el precio como moneda
  formatCurrency(price: number): string {
    return `$${price.toFixed(2)}`; // Formato básico con dos decimales y símbolo de $
  }
}