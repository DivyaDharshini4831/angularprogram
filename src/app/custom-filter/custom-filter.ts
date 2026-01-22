import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-custom-filter',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './custom-filter.html'
})
export class CustomFilterComponent {
  text = 'Angular Pipes';
}
