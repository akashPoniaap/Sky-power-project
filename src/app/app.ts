import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { BatteriesComponent } from './batteries/batteries';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Hero, About, Footer, BatteriesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showBatteries = false;
  selectedBatteryCategory = 'all';

  constructor() {
    this.showBatteries = sessionStorage.getItem('showBatteries') === 'true';
    const category = sessionStorage.getItem('batteryCategory');
    if (category) {
      this.selectedBatteryCategory = category;
      sessionStorage.removeItem('batteryCategory');
    }
    if (this.showBatteries) {
      sessionStorage.removeItem('showBatteries');
    }
  }
}
