import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Structural Directives</h3>

    <!-- ngIf -->
    <p *ngIf="isVisible">This text is visible using *ngIf</p>

    <!-- ngFor -->
    <ul>
      <li *ngFor="let item of items">
        {{ item }}
      </li>
    </ul>

    <!-- ngSwitch -->
    <div [ngSwitch]="role">
      <p *ngSwitchCase="'admin'">Admin User</p>
      <p *ngSwitchCase="'student'">Student User</p>
      <p *ngSwitchDefault>Guest User</p>
    </div>
  `
})
export class StructuralDirComponent {
  isVisible = true;
  items = ['Angular', 'React', 'Vue'];
  role = 'student';
}
