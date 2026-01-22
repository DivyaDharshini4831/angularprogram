// test.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from '../test/test';
import { PaymentComponent } from '../payment/payment';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TestComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render PaymentComponent inside TestComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-payment')).toBeTruthy();
  });

  it('should change status from PaymentComponent when pay is clicked', () => {
    const paymentCmp = fixture.debugElement.children[0].componentInstance as PaymentComponent;
    
    expect(paymentCmp.status).toBe('Pending'); // initial
    paymentCmp.pay();
    fixture.detectChanges();

    const paymentEl = fixture.nativeElement.querySelector('app-payment');
    expect(paymentCmp.status).toBe('Completed'); // after pay
    expect(paymentEl.querySelector('p').textContent).toContain('Completed');
  });
});
