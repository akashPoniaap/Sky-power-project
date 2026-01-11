import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  products = [
    {
      id: 1,
      name: 'Lithium Batteries',
      description: 'High-performance lithium battery solutions for renewable energy storage and grid applications.',
      image: '🔋',
      features: ['Long lifespan', 'High energy density', 'Fast charging', 'Eco-friendly']
    },
    {
      id: 2,
      name: 'Solar Batteries',
      description: 'Advanced solar battery systems designed to maximize solar energy capture and storage.',
      image: '☀️',
      features: ['Weather resistant', 'High efficiency', 'Smart monitoring', 'Durable design']
    },
    {
      id: 3,
      name: 'Inverter Batteries',
      description: 'Reliable inverter batteries for uninterrupted power supply in homes and businesses.',
      image: '⚡',
      features: ['Low maintenance', 'Stable voltage', 'Wide temperature range', 'Compact design']
    }
  ];

  selectedProduct: any = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  goBack() {
    this.selectedProduct = null;
  }

  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}
