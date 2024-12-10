import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginFormComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule] // Importamos FormsModule para manejar formularios en las pruebas
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize errorMessage as an empty string', () => {
    expect(component.errorMessage).toBe('');
  });

  it('should call showPopup method when "Olvidé mi contraseña" button is clicked', () => {
    spyOn(component, 'showPopup');
    const button = fixture.nativeElement.querySelector('.btn-link');
    button.click();
    expect(component.showPopup).toHaveBeenCalledWith('Olvidé mi contraseña');
  });

  it('should call login method when form is submitted', () => {
    spyOn(component, 'login');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  // Aquí puedes añadir más pruebas según la lógica específica que quieras validar en tu componente
});
