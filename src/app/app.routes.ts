import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';


export const routes: Routes = [
    {
        path:'about',
        component:EmployeeComponent
    },
  
];
