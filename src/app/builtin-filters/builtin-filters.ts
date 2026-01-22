import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-builtin-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builtin-filters.html'
})
export class BuiltinFiltersComponent {
  name = 'angular standalone';
  price = 1500;
  today = new Date();
}
