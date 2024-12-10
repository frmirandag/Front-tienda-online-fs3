import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when required fields are empty', () => {
    // Verificar que el formulario es inválido cuando los campos obligatorios están vacíos
    component.miFormulario.controls['nombre'].setValue('');
    component.miFormulario.controls['email'].setValue('');
    expect(component.miFormulario.invalid).toBeTruthy();

    // Opcional: Verificar que los errores son los correctos
    expect(component.miFormulario.controls['nombre'].hasError('required')).toBeTruthy();
    expect(component.miFormulario.controls['email'].hasError('required')).toBeTruthy();
  });

  // Más pruebas pueden ser agregadas aquí...
});
