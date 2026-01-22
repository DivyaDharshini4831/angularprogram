import { Component, signal } from '@angular/core';
import { AngularExpression } from './angular-expression/angular-expression';
import { Logger } from './logger';
import { User } from './user';
import { DatabindingComponent } from './databinding/databinding';
import { StructuralDirComponent } from './structural-dir/structural-dir';
import { ComponentDirComponent } from './component-dir/component-dir';
import { AttributeDirComponent } from './attribute-dir/attribute-dir';
import { Demo } from './demo/demo';
import { form } from '@angular/forms/signals';
import { Formvalidating } from './formvalidating/formvalidating';
import { BuiltinFiltersComponent } from './builtin-filters/builtin-filters';
import { CustomFilterComponent } from './custom-filter/custom-filter';
import { StudentsComponent } from './students/students';
import { TestComponent } from './test/test';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularExpression,DatabindingComponent,StructuralDirComponent,ComponentDirComponent,AttributeDirComponent,Demo,Formvalidating,BuiltinFiltersComponent,CustomFilterComponent,StudentsComponent,TestComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  userData: any;
  
  protected readonly title = signal('myapp');
  constructor(private logger: Logger, private user: User) {
    this.logger.log('App component instantiated');
    const userData = this.user.getuser();
    console.log('User Data:', userData);
    this.userData = userData;
    
  


  }
}
