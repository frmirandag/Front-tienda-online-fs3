import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Componente para manejar un formulario de contacto.
 * 
 * @description
 * Este componente se encarga de gestionar un formulario de contacto que incluye campos
 * como nombre, correo electrónico, asunto y mensaje. Utiliza Angular Reactive Forms
 * para la construcción y validación del formulario.
 * 
 * @usageNotes
 * Para utilizar este componente, asegúrese de importar CommonModule y ReactiveFormsModule
 * en el módulo que va a utilizar este componente.
 * 
 * El formulario valida automáticamente que todos los campos sean llenados antes de poder
 * enviar la información.
 */
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  /** FormGroup para manejar el formulario de contacto */
  miFormulario: FormGroup;

  /**
   * Constructor del componente ContactoComponent.
   * 
   * @param fb - FormBuilder utilizado para construir el formulario.
   */
  constructor(private fb: FormBuilder) {
    // Inicialización del formulario con validadores
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required], // Campo de nombre requerido
      email: ['', [Validators.required, Validators.email]], // Campo de correo con validación de formato de email
      asunto: ['', Validators.required], // Campo de asunto requerido
      mensaje: ['', Validators.required] // Campo de mensaje requerido
    });
  }

  /**
   * Método para manejar la acción de enviar el formulario.
   * 
   * @remarks
   * Este método se llama cuando se envía el formulario. Verifica si el formulario
   * es válido y muestra el valor en la consola si lo es.
   */
  submitForm() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
    }
  }
}
