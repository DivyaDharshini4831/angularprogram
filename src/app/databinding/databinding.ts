import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrls: ['./databinding.css']
})
export class DatabindingComponent {

  // Variables for binding
  studentName: string = 'Divya';
  age: number = 22;
  isButtonDisabled: boolean = false;
  message: string = '';

  // Event method
  showMessage() {
    this.message = 'Welcome to Angular Data Binding!';
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
