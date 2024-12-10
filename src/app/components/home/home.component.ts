import { Component } from '@angular/core';

/**
 * Componente para la página de inicio.
 * 
 * @description
 * Este componente maneja la lógica para mostrar una imagen centrada en la página de inicio.
 * Permite cambiar dinámicamente la clase CSS de la imagen para modificar su posición.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Propiedad que controla la clase CSS aplicada a la imagen */
  imageClass = 'centered-image';

  constructor() {}

  /**
   * Alterna la clase CSS de la imagen entre 'centered-image' y 'centered-image-centered'.
   * Esto cambia dinámicamente la posición de la imagen en la página.
   */
  toggleImageClass() {
    this.imageClass = this.imageClass === 'centered-image' ? 'centered-image-centered' : 'centered-image';
  }
}
