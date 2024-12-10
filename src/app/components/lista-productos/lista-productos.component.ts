import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
  providers: [JsonService]
})
export class ListaProductosComponent implements OnInit{

  productos: any[] = [];
  nombre: string = '';
  precio: number | null = null;
  tipo: string = '';

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.productos = data;
    });
  }


  eliminar(productos: any): void {
    const index = this.productos.findIndex((elemento: any) => elemento.id === productos.id);
    
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.jsonService.MetodoProducto(this.productos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  modificar(producto: any): void {
    const index = this.productos.findIndex((elemento: any) => elemento.id === producto.id);
    
    if (index !== -1) {
      this.productos[index].nombre = this.nombre;
      this.productos[index].precio = this.precio;
      this.jsonService.MetodoProducto(this.productos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  addProduct(): void {
    const newProduct = {
      id: this.productos.length > 0 ? Math.max(...this.productos.map((p: any) => p.id)) + 1 : 1,
      nombre: this.nombre,
      tipo: this.tipo,
      precio: this.precio
    };
    this.productos.push(newProduct);
    this.jsonService.MetodoProducto(this.productos);
  }

  submitForm(): void {
    if (this.nombre && this.precio !== null) {
      this.addProduct();
      this.nombre = '';
      this.precio = null;
      this.tipo = '';
    } else {
      window.alert('Por favor, ingrese un nombre y un precio válidos');
    }
  }
  formatCurrency(price: number): string {
    return `$${price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }
}

