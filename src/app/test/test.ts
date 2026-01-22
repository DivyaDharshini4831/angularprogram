// test.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../payment/payment';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, PaymentComponent], // Import PaymentComponent
  template: `
    <h1>Test Component</h1>
    <app-payment></app-payment>  <!-- Embed PaymentComponent -->
  `
})
export class TestComponent {}
