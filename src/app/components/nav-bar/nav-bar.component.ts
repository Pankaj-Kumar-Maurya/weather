import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    imports: [NgClass,RouterLink,RouterLinkActive],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMenuActive = false; // Menu visibility state

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive; // Toggle the menu's visibility
    console.log('Menu toggled:', this.isMenuActive); // Debug log
  }

}
