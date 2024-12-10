import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('¡Bienvenido a Super Gamer, donde comienza la diversión!');
    expect(compiled.querySelector('p.lead')?.textContent).toContain('¡Nos alegra mucho tenerte aquí!');
  });

  it('should render product sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cardTitles = compiled.querySelectorAll('.card-title');
    expect(cardTitles.length).toBe(3);
    expect(cardTitles[0].textContent).toContain('Calidad');
    expect(cardTitles[1].textContent).toContain('Envíos Rápidos');
    expect(cardTitles[2].textContent).toContain('Soporte 24/7');
  });

  // Más pruebas pueden ser agregadas aquí...
});
