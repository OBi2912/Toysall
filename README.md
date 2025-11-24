# ToysAll 🧸

A modern, responsive e-commerce website for toys built with React, featuring bilingual support (Spanish/English), dark/light theme switching, and a complete shopping experience.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse toys by age categories (Babies, Preschool, Children, Tweens, Teens, Educational, Sports, Electronics)
- **Shopping Cart**: Add/remove items, quantity management, persistent cart storage
- **Product Modals**: Detailed product information with ratings, features, and descriptions
- **Payment Processing**: Integrated payment methods page with form validation

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: Full Spanish/English language switching
- **Theme Switching**: Light and dark mode with persistent preferences
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

### Technical Features
- **React 19**: Latest React with modern hooks and patterns
- **React Router**: Client-side routing for SPA experience
- **Context API**: State management for language and cart
- **Local Storage**: Persistent cart and user preferences
- **CSS Variables**: Dynamic theming system
- **Vite**: Fast development and optimized builds

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router 7
- **Styling**: CSS3 with CSS Variables, Flexbox, Grid
- **Build Tool**: Vite
- **Icons**: Custom SVG icons and Lucide icons
- **Deployment**: Ready for static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd toysall
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Navigation
- Browse categories by clicking on age-group cards
- View detailed product information in modal dialogs
- Add items to cart from product modals
- Access cart from header icon
- Proceed to payment from cart

### Language & Theme
- Switch between Spanish and English using footer toggle
- Toggle between light and dark themes using footer toggle
- Preferences are automatically saved

### Shopping
- Add multiple quantities of items
- View cart summary with shipping calculations
- Remove items or adjust quantities
- Complete purchase through payment methods

## 📁 Project Structure

```
toysall/
├── public/
│   ├── payment-methods.html    # Static payment page
│   └── vite.svg               # Vite logo
├── src/
│   ├── assets/
│   │   ├── icons/             # SVG icons
│   │   └── react.svg          # React logo
│   ├── components/
│   │   ├── Cart.jsx           # Shopping cart component
│   │   ├── Categories.jsx     # Product categories grid
│   │   ├── CategoryModal.jsx  # Product detail modal
│   │   ├── Deals.jsx          # Special offers section
│   │   ├── FeaturedProducts.jsx # Featured items
│   │   ├── Footer.jsx         # Site footer with toggles
│   │   ├── Header.jsx         # Site header with navigation
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Modal.jsx          # Reusable modal component
│   │   └── PaymentMethods.jsx # Payment form
│   ├── contexts/
│   │   └── LanguageContext.jsx # Language state management
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── index.css              # Base styles and variables
│   └── main.jsx               # App entry point
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Design System

### Color Variables
- **Primary**: Blue gradient for buttons and accents
- **Secondary**: Purple gradient for secondary elements
- **Success/Warning**: Green and orange gradients
- **Backgrounds**: Adaptive light/dark theme colors
- **Text**: Multiple shades for hierarchy

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Readable sans-serif font
- **Interactive**: Hover states and transitions

### Components
- **Cards**: Glass-morphism effect with shadows
- **Buttons**: Gradient backgrounds with hover animations
- **Modals**: Centered overlays with backdrop blur
- **Forms**: Clean inputs with focus states

## 🌍 Internationalization

The app supports two languages:
- **Spanish (es)**: Default language
- **English (en)**: Full translation

Language switching affects:
- Navigation labels
- Product information
- Form labels and buttons
- Footer content
- Error messages

## 🌓 Theming

Two theme modes available:
- **Light Mode**: Clean white backgrounds
- **Dark Mode**: Dark backgrounds with light text

Theme switching affects:
- Background colors
- Text colors
- Border colors
- Component backgrounds
- Modal overlays

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Adapted grid layouts
- **Mobile**: Single-column layouts, touch-friendly buttons

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Quality
- ESLint configuration for code consistency
- React best practices
- Accessibility guidelines
- Performance optimizations

## 🚀 Deployment

The app is built with Vite for optimal performance:
- Static asset optimization
- Code splitting
- Tree shaking
- Modern browser support

Deploy to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Icons inspired by Lucide and custom designs
- Color scheme inspired by modern design trends
- Responsive design patterns from CSS Grid and Flexbox

---

Made with ❤️ for toy lovers everywhere!