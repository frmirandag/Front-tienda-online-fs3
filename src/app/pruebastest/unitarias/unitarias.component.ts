import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * @description
 * Componente de encabezado
 * 
 * Este componente muestra el encabezado con logo y menu
 */
/**
 * @usageNotes
 * 
 * 1. Importa este modulo de tu aplicacion principal
 * 2. Añade el selector'app-encabezado' en tu plantulla para ostrar el encabezado
 * 3. Añade el selectoe 'app-pie-pagina' para mostrar pie de pagina
 * 
 */

@Component({
  selector: 'app-unitarias',
  standalone: true,
  imports: [],
  templateUrl: './unitarias.component.html',
  styleUrl: './unitarias.component.css'
})
export class UnitariasComponent {

  miFormulario!: FormGroup;
  resultado!: number;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero1: ['', Validators.required],
      numero2: ['', Validators.required],
    })
  }

  sumarDesdeFormulario():void {
    const {numero1, numero2} = this.miFormulario.value;
    this.sumar(numero1,numero2);
  }
  /**
   * 
   * @param {number} a - El primer numero
   * @param {number} b - El segundo numero
   * @returns {number} -La suma de los numeros
   */  

  sumar(a: number, b: number): void {
    this.resultado -a + b;
  }
}
