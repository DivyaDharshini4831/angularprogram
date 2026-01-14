import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Attribute Directives</h3>

    <!-- ngClass -->
    <p [ngClass]="{ active: isActive }">
      This uses ngClass
    </p>

    <!-- ngStyle -->
    <p [ngStyle]="{ color: textColor }">
      This uses ngStyle
    </p>

    <!-- ngModel -->
    <input [(ngModel)]="textColor" placeholder="Enter color">
  `,
  styles: [`
    .active {
      font-weight: bold;
      color: green;
    }
  `]
})
export class AttributeDirComponent {
  isActive = true;
  textColor = 'blue';
}
