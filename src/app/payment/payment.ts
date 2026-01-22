// payment.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Payment Component</h2>
    <button (click)="pay()">Pay</button>
    <p>Status: {{ status }}</p>
  `
})
export class PaymentComponent {
  status = 'Pending';

  pay() {
    this.status = 'Completed';
  }
}
