import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Interfaz que define la estructura de un usuario.
 */
interface User {
  username: string;
  password: string;
  role: string;
}

/**
 * Componente para la autenticación de usuarios.
 * 
 * Este componente maneja el formulario de inicio de sesión y realiza la autenticación básica.
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage(errorMessage: any) {
    throw new Error('Method not implemented .');
  }
  login(login: any) {
    throw new Error('Method not implemented .');
  }
  showPopup(showPopup: any) {
    throw new Error('Method not implemented .');
  }

  /**
   * Formulario de inicio de sesión construido con FormBuilder.
   */
  loginForm: FormGroup;

  /**
   * Mensaje de estado del inicio de sesión, que se muestra en caso de error de autenticación.
   */
  loginMessage: string = '';

  /**
   * Lista estática de usuarios para demostración.
   */
  users: User[] = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  /**
   * Constructor del componente LoginComponent.
   * 
   * @param router Instancia del enrutador de Angular para la navegación.
   * @param formBuilder Instancia de FormBuilder para la construcción del formulario.
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    // Inicializa el formulario de inicio de sesión con validadores requeridos
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Método invocado al enviar el formulario de inicio de sesión.
   * Realiza la autenticación básica comparando el usuario ingresado con la lista de usuarios estáticos.
   * Si la autenticación es exitosa, almacena el usuario en localStorage y redirige a la página principal.
   * Si las credenciales no son válidas, muestra un mensaje de error.
   */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate(['/']); // Redirige a la página principal después de la autenticación
    } else {
      this.loginMessage = 'Nombre de usuario o contraseña incorrectos';
    }
  }

}
