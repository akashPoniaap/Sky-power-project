import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batteries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batteries.html',
  styleUrl: './batteries.css'
})
export class BatteriesComponent {
  @Input() selectedCategory = 'all';
  selectedProductDetails: any = null;

  categories = [
    { id: 'all', name: 'All Products', icon: '🔋' },
    { id: 'lithium', name: 'Lithium Batteries', icon: '⚡' },
    { id: 'solar', name: 'Solar Batteries', icon: '☀️' },
    { id: 'inverter', name: 'Inverter Batteries', icon: '🔌' }
  ];

  products = [
    {
      id: 1,
      name: 'LithiumPro 48V 100Ah',
      category: 'lithium',
      price: '$2,499',
      image: '🔋',
      rating: 4.8,
      reviews: 156,
      specs: ['48V', '100Ah', '4.8kWh', 'LiFePO4'],
      description: 'High-performance lithium battery for solar systems',
      details: {
        brand: 'LithiumPro',
        model: 'LP48-100',
        voltage: '48V',
        capacity: '100Ah',
        type: 'LiFePO4 Battery',
        warranty: '10 Years',
        dimensions: { length: '650mm', width: '170mm', height: '240mm' },
        weight: '32kg',
        tempRange: '-10°C to 60°C',
        efficiency: '95%'
      }
    },
    {
      id: 2,
      name: 'LithiumPro 48V 200Ah',
      category: 'lithium',
      price: '$4,299',
      image: '🔋',
      rating: 4.9,
      reviews: 203,
      specs: ['48V', '200Ah', '9.6kWh', 'LiFePO4'],
      description: 'Extended capacity lithium storage solution',
      details: {
        brand: 'LithiumPro',
        model: 'LP48-200',
        voltage: '48V',
        capacity: '200Ah',
        type: 'LiFePO4 Battery',
        warranty: '10 Years',
        dimensions: { length: '700mm', width: '300mm', height: '250mm' },
        weight: '65kg',
        tempRange: '-10°C to 60°C',
        efficiency: '96%'
      }
    },
    {
      id: 3,
      name: 'SolarMax 24V 150Ah',
      category: 'solar',
      price: '$1,899',
      image: '☀️',
      rating: 4.7,
      reviews: 134,
      specs: ['24V', '150Ah', '3.6kWh', 'Solar Optimized'],
      description: 'Optimized for solar panel integration',
      details: {
        brand: 'SolarMax',
        model: 'SM24-150',
        voltage: '24V',
        capacity: '150Ah',
        type: 'Solar Lithium Battery',
        warranty: '8 Years',
        dimensions: { length: '550mm', width: '140mm', height: '200mm' },
        weight: '22kg',
        tempRange: '-5°C to 55°C',
        efficiency: '94%'
      }
    },
    {
      id: 4,
      name: 'SolarMax 48V 100Ah',
      category: 'solar',
      price: '$2,599',
      image: '☀️',
      rating: 4.8,
      reviews: 167,
      specs: ['48V', '100Ah', '4.8kWh', 'Solar Ready'],
      description: 'Complete solar storage system',
      details: {
        brand: 'SolarMax',
        model: 'SM48-100',
        voltage: '48V',
        capacity: '100Ah',
        type: 'Solar Lithium Battery',
        warranty: '10 Years',
        dimensions: { length: '600mm', width: '160mm', height: '220mm' },
        weight: '32kg',
        tempRange: '-5°C to 55°C',
        efficiency: '95%'
      }
    },
    {
      id: 5,
      name: 'PowerVault Inverter 3000W',
      category: 'inverter',
      price: '$999',
      image: '🔌',
      rating: 4.6,
      reviews: 89,
      specs: ['3000W', '48V', 'Pure Sine', 'Built-in Controller'],
      description: 'High-capacity inverter for home use',
      details: {
        brand: 'PowerVault',
        model: 'PV3000',
        voltage: '48V',
        power: '3000W',
        type: 'Pure Sine Wave Inverter',
        warranty: '5 Years',
        dimensions: { length: '500mm', width: '220mm', height: '250mm' },
        weight: '15kg',
        tempRange: '0°C to 50°C',
        efficiency: '92%'
      }
    },
    {
      id: 6,
      name: 'PowerVault Inverter 5000W',
      category: 'inverter',
      price: '$1,599',
      image: '🔌',
      rating: 4.9,
      reviews: 142,
      specs: ['5000W', '48V', 'Pure Sine', 'Smart Management'],
      description: 'Heavy-duty inverter for industrial applications',
      details: {
        brand: 'PowerVault',
        model: 'PV5000',
        voltage: '48V',
        power: '5000W',
        type: 'Pure Sine Wave Inverter',
        warranty: '7 Years',
        dimensions: { length: '550mm', width: '250mm', height: '280mm' },
        weight: '22kg',
        tempRange: '0°C to 50°C',
        efficiency: '93%'
      }
    },
    {
      id: 7,
      name: 'LithiumPro 24V 100Ah',
      category: 'lithium',
      price: '$1,799',
      image: '🔋',
      rating: 4.7,
      reviews: 98,
      specs: ['24V', '100Ah', '2.4kWh', 'Portable'],
      description: 'Compact lithium solution for smaller systems',
      details: {
        brand: 'LithiumPro',
        model: 'LP24-100',
        voltage: '24V',
        capacity: '100Ah',
        type: 'LiFePO4 Battery',
        warranty: '10 Years',
        dimensions: { length: '550mm', width: '140mm', height: '200mm' },
        weight: '16kg',
        tempRange: '-10°C to 60°C',
        efficiency: '95%'
      }
    },
    {
      id: 8,
      name: 'SolarMax 48V 200Ah',
      category: 'solar',
      price: '$3,899',
      image: '☀️',
      rating: 5.0,
      reviews: 201,
      specs: ['48V', '200Ah', '9.6kWh', 'Premium Solar'],
      description: 'Premium solar battery with maximum efficiency',
      details: {
        brand: 'SolarMax',
        model: 'SM48-200',
        voltage: '48V',
        capacity: '200Ah',
        type: 'Premium Solar Lithium',
        warranty: '12 Years',
        dimensions: { length: '700mm', width: '300mm', height: '250mm' },
        weight: '65kg',
        tempRange: '-5°C to 55°C',
        efficiency: '97%'
      }
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  getCategoryName(): string {
    if (this.selectedCategory === 'all') {
      return 'All Products';
    }
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category?.name || 'Products';
  }

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
  }

  viewDetails(product: any) {
    this.selectedProductDetails = product;
  }

  closeDetails() {
    this.selectedProductDetails = null;
  }

  getDetailsKeys(): string[] {
    if (!this.selectedProductDetails?.details) return [];
    return Object.keys(this.selectedProductDetails.details).filter(
      key => key !== 'dimensions'
    );
  }
}
