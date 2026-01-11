import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  menuOpen = false;
  productsOpen = false;
  dropdownOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  goHome() {
    sessionStorage.removeItem('showBatteries');
    sessionStorage.removeItem('batteryCategory');
    this.menuOpen = false;
    window.location.href = '/';
  }

  openProducts() {
    this.productsOpen = true;
    this.menuOpen = false;
  }

  closeProducts() {
    this.productsOpen = false;
  }

  openBatteries(category?: string) {
    // Route to batteries page with optional category filter
    if (category) {
      sessionStorage.setItem('batteryCategory', category);
    }
    sessionStorage.setItem('showBatteries', 'true');
    this.dropdownOpen = false;
    this.menuOpen = false;
    window.location.href = '/batteries';
  }
}
