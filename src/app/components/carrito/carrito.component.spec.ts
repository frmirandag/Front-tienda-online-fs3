
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart from localStorage', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, name: 'Producto 1', price: 100 }]));
    component.loadCart();
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].name).toBe('Producto 1');
    expect(component.cart[0].price).toBe(100);
  });

  it('should remove item from cart', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, name: 'Producto 1', price: 100 }]));
    component.loadCart();
    const itemToRemove = component.cart[0];
    component.removeFromCart(itemToRemove);
    expect(component.cart.length).toBe(0);
    expect(localStorage.getItem('cart')).toBe('[]');
  });

  it('should alert when checkout with empty cart', () => {
    spyOn(window, 'alert');
    component.checkout();
    expect(window.alert).toHaveBeenCalledWith('El carrito está vacío');
  });

  it('should alert when checkout with items in cart', () => {
    spyOn(window, 'alert');
    localStorage.setItem('cart', JSON.stringify([{ id: 1, name: 'Producto 1', price: 100 }]));
    component.loadCart();
    component.checkout();
    expect(window.alert).toHaveBeenCalledWith('Procediendo al pago...');
  });
});
