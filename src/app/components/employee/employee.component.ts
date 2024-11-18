import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private router:Router) {
  
  }
  
  goToHome()
  {
    this.router.navigateByUrl("");
  }
}




