import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formvalidating',
  standalone: true,                 // ✅ REQUIRED
  imports: [CommonModule, FormsModule], // ✅ REQUIRED
  templateUrl: './formvalidating.html',
  styleUrls: ['./formvalidating.css'],
})
export class Formvalidating {

  user = {
    username: '',
    email: '',
    password: ''
  };

  submitForm() {
    console.log('Form Submitted', this.user);
  }
}
