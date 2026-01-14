import { Component } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-angular-expression',
  standalone: true,
  imports: [Highlight],
  templateUrl: './angular-expression.html',
  styleUrls: ['./angular-expression.css']
})
export class AngularExpression{
  inputValue: string = '';

  showValue(value: string) {
    this.inputValue = value;
  }
}
