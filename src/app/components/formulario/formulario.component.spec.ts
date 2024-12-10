import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when required fields are empty', () => {
    // Verificar que el formulario es inválido cuando los campos obligatorios están vacíos
    component.miFormulario.controls['nombre_completo'].setValue('');
    component.miFormulario.controls['nombre_usuario'].setValue('');
    component.miFormulario.controls['correo'].setValue('');
    component.miFormulario.controls['contraseña'].setValue('');
    expect(component.miFormulario.invalid).toBeTruthy();

    // Opcional: Verificar que los errores son los correctos
    expect(component.miFormulario.controls['nombre_completo'].hasError('required')).toBeTruthy();
    expect(component.miFormulario.controls['nombre_usuario'].hasError('required')).toBeTruthy();
    expect(component.miFormulario.controls['correo'].hasError('required')).toBeTruthy();
    expect(component.miFormulario.controls['contraseña'].hasError('required')).toBeTruthy();
  });

  // Más pruebas pueden ser agregadas aquí...
});
