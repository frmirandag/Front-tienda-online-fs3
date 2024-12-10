import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Componente para manejar un formulario de registro.
 * 
 * @description
 * Este componente se encarga de gestionar un formulario de registro que incluye campos
 * como nombre completo, nombre de usuario, correo electrónico y contraseña. Utiliza
 * Angular Reactive Forms para la construcción y validación del formulario.
 * 
 * @usageNotes
 * Para utilizar este componente, asegúrese de importar CommonModule y ReactiveFormsModule
 * en el módulo que va a utilizar este componente.
 */
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  /** FormGroup para manejar el formulario */
  miFormulario: FormGroup;

  /**
   * Constructor del componente.
   * 
   * @param fb FormBuilder utilizado para construir el formulario.
   */
  constructor(private fb: FormBuilder) {
    // Inicialización del formulario con validadores
    this.miFormulario = this.fb.group({
      nombre_completo: ['', Validators.required], // Campo de nombre completo requerido
      nombre_usuario: ['', Validators.required], // Campo de nombre de usuario requerido
      correo: ['', [Validators.required, Validators.email]], // Campo de correo electrónico con validación de formato de email
      contraseña: ['', Validators.required] // Campo de contraseña requerido
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
