import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding';
import { AngularExpression } from './angular-expression/angular-expression';
import { Demo } from './demo/demo';
import { Formvalidating } from './formvalidating/formvalidating';
import { BuiltinFiltersComponent } from './builtin-filters/builtin-filters';

export const routes: Routes = [
    {
        path:'databinding',
        component:DatabindingComponent
    },
    {
        path:'angular-expressions',
        component:AngularExpression
    }
    ,
    {
        path:'demo',
        component:Demo
    }
    ,{
        path:'formvalidating',
        component:Formvalidating
    }
    ,
    {
        path:'builtin-filters',
        component:BuiltinFiltersComponent
    }
    ,
    {
        path:'custom-filters',
        loadComponent: () => import('./custom-filter/custom-filter').then(m => m.CustomFilterComponent)

    }
    ,{
        path:'students',
        loadComponent: () => import('./students/students').then(m => m.StudentsComponent)
    }
    ,
    {
        path:'student-service',
        loadComponent: () => import('./students/students').then(m => m.StudentsComponent)
    }
];
