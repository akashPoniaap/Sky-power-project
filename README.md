# Sky Power - Battery E-Commerce Platform

A modern, responsive Angular-based e-commerce platform specializing in premium battery solutions including Lithium, Solar, and Inverter batteries.

## 🌟 Features

### Core Features
- **Product Catalog** - Browse premium battery products across three categories
- **Category Filtering** - Easy navigation through Lithium, Solar, and Inverter batteries
- **Product Details** - Comprehensive specifications and technical details for each battery
- **Add to Cart** - Quick add-to-cart functionality
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices

### User Interface
- **Modern Dark Theme** - Sleek dark navy background with cyan accents
- **Electric Animation Effects** - Dynamic banner with electric shock animations
- **Product Cards** - Beautiful product grid with ratings and pricing
- **Details Modal** - Detailed specifications displayed in an elegant modal
- **Mobile Navigation** - Touch-friendly hamburger menu for mobile devices

### Navigation
- **Navbar** - Fixed navigation with logo and category dropdown
- **Products Dropdown** - Quick access to all battery categories
- **Category Sidebar** - Filter products by category (Desktop & Mobile)
- **Home/Hero Section** - Stunning banner with electric battery animations

## 🛠️ Tech Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Language**: TypeScript
- **Styling**: CSS3 with responsive design
- **Build Tool**: Angular CLI
- **Development Server**: ng serve

## 📋 Project Structure

```
sky-power/
├── src/
│   ├── app/
│   │   ├── navbar/              # Navigation component with dropdown menu
│   │   │   ├── navbar.ts
│   │   │   ├── navbar.html
│   │   │   └── navbar.css
│   │   ├── hero/                # Hero banner with animations
│   │   │   ├── hero.ts
│   │   │   ├── hero.html
│   │   │   └── hero.css
│   │   ├── about/               # About section
│   │   ├── footer/              # Footer component
│   │   ├── products/            # Products modal component
│   │   ├── batteries/           # Battery catalog with filtering
│   │   │   ├── batteries.ts
│   │   │   ├── batteries.html
│   │   │   └── batteries.css
│   │   ├── app.ts              # Root component
│   │   ├── app.html
│   │   └── app.css
│   ├── index.html              # Main HTML file with favicon
│   └── styles.css              # Global styles
├── public/
│   └── Images/
│       ├── logo.png            # Navbar logo
│       ├── Banner.png          # Hero banner image
│       └── fav-icon.png        # Browser favicon
├── angular.json                # Angular configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sky-power.git
   cd sky-power
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

**Development Server**
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes.

**Build for Production**
```bash
ng build --prod
```
The build artifacts will be stored in the `dist/` directory.

## 📱 Components Overview

### Navbar Component
- Fixed navigation bar with Sky Power logo
- Products dropdown with category submenu (Lithium, Solar, Inverter)
- Hamburger menu for mobile devices
- Responsive design (desktop hover, mobile click)

### Hero Component
- Full-screen banner with background image
- Electric shock animation effects with bolt emoji
- Animated battery with glowing effect
- Responsive text sizing for all devices

### Batteries Component
- Product grid layout with category filtering
- Responsive sidebar filter for easy navigation
- Product cards with ratings, pricing, and specifications
- Detailed specifications modal
- Mobile-responsive grid layout

### Products Component
- Modal display for product overview
- Product categorization
- Call-to-action buttons
- Responsive design

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark Navy (#0a0f1f, #1a2a4f)
- **Accent**: Cyan (#00ffea)
- **Text**: White with transparency variations

### Animations
- Electric shock bolt animation on hero banner
- Product card hover effects
- Smooth transitions throughout the app
- Glowing text shadows for emphasis

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px (480px for small phones)

## 🛒 Product Categories

### Lithium Batteries
- High-performance LiFePO4 technology
- Multiple voltage and capacity options (24V-48V, 100Ah-200Ah)
- Up to 10-year warranty

### Solar Batteries
- Solar-optimized designs
- Weather-resistant construction
- Smart monitoring capabilities
- 8-12 year warranty

### Inverter Batteries
- Pure sine wave inverters
- 3000W-5000W power ratings
- Built-in protection mechanisms
- 5-7 year warranty

## ✅ Features Implemented

- ✅ Product catalog with 8+ products
- ✅ Category filtering (Lithium, Solar, Inverter)
- ✅ Product details modal with specifications table
- ✅ Responsive navbar with category dropdown
- ✅ Mobile hamburger menu with touch support
- ✅ Product grid layout with cards
- ✅ Rating and review display
- ✅ Add to cart functionality
- ✅ Hero banner with electric animations
- ✅ Footer component
- ✅ Favicon integration
- ✅ Fully responsive design
- ✅ Electric shock animation effects
- ✅ SVG battery visualization

## 🔄 Navigation Flow

1. **Home Page**
   - Hero banner with electric animations
   - About section
   - Navigation to products

2. **Products/Batteries Page**
   - Category filtering sidebar
   - Product grid with cards
   - Click "Details" to view specifications
   - Add to cart option

3. **Category Navigation**
   - Products → Lithium Batteries
   - Products → Solar Batteries
   - Products → Inverter Batteries
   - Each shows filtered products with responsive layout

## 📱 Mobile Optimizations

- **Touch-friendly Navigation**: Hamburger menu with click-based dropdowns
- **Responsive Grid**: Category filters display as grid on mobile (768px and below)
- **Optimized Images**: Emoji icons for fast loading
- **Mobile Details Modal**: Adjusted layout for smaller screens
- **Flexible Typography**: Font sizes scale appropriately across devices
- **Horizontal Scrolling**: Smooth scrolling for categories on smaller tablets

## 🎯 Future Enhancements

- [ ] Shopping cart system with checkout
- [ ] User authentication and profiles
- [ ] Product search functionality
- [ ] Advanced filtering (price, specifications)
- [ ] Product reviews and ratings
- [ ] Blog/News section
- [ ] Contact form integration
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Wishlist functionality
- [ ] Product comparison tool

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Sky Power Development Team**
- Created: January 2026
- Framework: Angular 17+
- Last Updated: January 10, 2026

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request with your improvements.

## 📞 Contact

For inquiries about Sky Power batteries and features, please contact:
- Email: info@skypower.com
- Website: www.skypower.com

## 🙏 Acknowledgments

- Angular Team for the excellent framework
- Community for feedback and support
- Design inspiration from modern e-commerce platforms

---

**Built with ❤️ using Angular 17+ and TypeScript**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
