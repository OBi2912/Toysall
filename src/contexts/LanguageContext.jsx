import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Header
    home: 'Home',
    categories: 'Categories',
    featured: 'Featured',
    deals: 'Deals',
    about: 'About',
    paymentMethods: 'Payment Methods',
    search: 'Search',
    cart: 'Cart',
    funWithoutLimits: 'Fun without limits',

    // Hero
    heroTitle: 'Welcome to ToysAll',
    heroSubtitle: 'The best toys for all ages',
    heroDescription: 'Discover amazing toys that spark imagination and create unforgettable moments.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    scrollToExplore: 'Scroll to explore',
    happyCustomers: 'Happy Customers',
    rating: 'Rating',

    // Categories
    exploreByAge: 'Explore by Age',
    toyCategories: 'Toy Categories',
    findPerfectToy: 'Find the perfect toy for each stage of development',
    explore: 'Explore',
    products: 'products',
    babies: 'Babies',
    babiesDesc: '0-2 years',
    preschool: 'Preschool',
    preschoolDesc: '3-5 years',
    children: 'Children',
    childrenDesc: '6-9 years',
    tweens: 'Tweens',
    tweensDesc: '10-12 years',
    teens: 'Teens',
    teensDesc: '13+ years',
    educational: 'Educational',
    educationalDesc: 'All ages',
    sports: 'Sports',
    sportsDesc: 'All ages',
    electronics: 'Electronics',
    electronicsDesc: '8+ years',

    // Featured Products
    bestSellers: 'Best Sellers',
    featuredProducts: 'Featured Products',
    favoriteToys: 'Our customers\' favorite toys',
    addToCart: 'Add to Cart',

    // Deals
    specialOffers: 'Special Offers',
    productsOnSale: 'Products on Sale',
    exclusiveDiscounts: 'Take advantage of exclusive discounts on selected toys',

    // Footer
    bestToyStore: 'The best toy store for all ages.',
    qualityFunSmiles: 'Quality, fun and smiles guaranteed.',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    helpSupport: 'Help & Support',
    shippingReturns: 'Shipping & Returns',
    warranty: 'Warranty',
    contact: 'Contact',
    appearance: 'Appearance',
    changeLightDark: 'Switch between light and dark mode',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    allRightsReserved: 'All rights reserved',

    // Cart
    shoppingCart: 'Shopping Cart',
    yourCartIsEmpty: 'Your cart is empty',
    addAmazingToys: 'Add some amazing toys',
    continueShopping: 'Continue Shopping',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    free: 'FREE',
    total: 'Total',
    proceedToPayment: 'Proceed to Payment',
    closeCart: 'Close cart',
    addMoreForFreeShipping: 'Add $%amount% more for free shipping',
    removeProduct: 'Remove product',

    // Payment Methods
    paymentMethodsTitle: 'Payment Methods',
    totalToPay: 'Total to pay',
    selectPaymentMethod: 'Select your payment method',
    card: 'Card',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    cardInfo: 'Card Information',
    cardNumber: 'Card Number',
    expirationDate: 'Expiration Date',
    cvv: 'CVV',
    cardholderName: 'Cardholder Name',
    paypalAccount: 'PayPal Account',
    paypalEmail: 'PayPal Email',
    paypalRedirect: 'You will be redirected to PayPal to complete payment securely.',
    applePayTitle: 'Apple Pay',
    useAppleDevice: 'Use your Apple device to pay securely.',
    payWithApplePay: 'Pay with Apple Pay',
    processPayment: 'Process Payment',

    // Modals
    productDetails: 'Product Details',
    buyNow: 'Buy Now',
    features: 'Features',
    reviews: 'reviews',

    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    noProducts: 'No hay productos para esta categoría.'
  },
  es: {
    // Header
    home: 'Inicio',
    categories: 'Categorías',
    featured: 'Destacados',
    deals: 'Ofertas',
    about: 'Nosotros',
    paymentMethods: 'Métodos de Pago',
    search: 'Buscar',
    cart: 'Carrito',
    funWithoutLimits: 'Diversión sin límites',

    // Hero
    heroTitle: 'Bienvenido a ToysAll',
    heroSubtitle: 'Los mejores juguetes para todas las edades',
    heroDescription: 'Descubre juguetes increíbles que despiertan la imaginación y crean momentos inolvidables.',
    shopNow: 'Comprar Ahora',
    learnMore: 'Saber Más',
    scrollToExplore: 'Desliza para explorar',
    happyCustomers: 'Clientes Felices',
    rating: 'Valoración',

    // Categories
    exploreByAge: 'Explora por Edad',
    toyCategories: 'Categorías de Juguetes',
    findPerfectToy: 'Encuentra el juguete perfecto para cada etapa del desarrollo',
    explore: 'Explorar',
    products: 'productos',
    babies: 'Bebés',
    babiesDesc: '0-2 años',
    preschool: 'Preescolar',
    preschoolDesc: '3-5 años',
    children: 'Niños',
    childrenDesc: '6-9 años',
    tweens: 'Preadolescentes',
    tweensDesc: '10-12 años',
    teens: 'Adolescentes',
    teensDesc: '13+ años',
    educational: 'Educativos',
    educationalDesc: 'Todas las edades',
    sports: 'Deportes',
    sportsDesc: 'Todas las edades',
    electronics: 'Electrónicos',
    electronicsDesc: '8+ años',

    // Featured Products
    bestSellers: 'Más Vendidos',
    featuredProducts: 'Productos Destacados',
    favoriteToys: 'Los juguetes favoritos de nuestros clientes',
    addToCart: 'Agregar al Carrito',

    // Deals
    specialOffers: 'Ofertas Especiales',
    productsOnSale: 'Productos en Oferta',
    exclusiveDiscounts: 'Aprovecha descuentos exclusivos en juguetes seleccionados',

    // Footer
    bestToyStore: 'La mejor tienda de juguetes para todas las edades.',
    qualityFunSmiles: 'Calidad, diversión y sonrisas garantizadas.',
    quickLinks: 'Enlaces Rápidos',
    customerService: 'Atención al Cliente',
    helpSupport: 'Ayuda y Soporte',
    shippingReturns: 'Envíos y Devoluciones',
    warranty: 'Garantía',
    contact: 'Contacto',
    appearance: 'Apariencia',
    changeLightDark: 'Cambia entre modo claro y oscuro',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    allRightsReserved: 'Todos los derechos reservados',

    // Cart
    shoppingCart: 'Carrito de Compras',
    yourCartIsEmpty: 'Tu carrito está vacío',
    addAmazingToys: 'Agrega algunos juguetes increíbles',
    continueShopping: 'Continuar Comprando',
    subtotal: 'Subtotal',
    shipping: 'Envío',
    free: 'GRATIS',
    total: 'Total',
    proceedToPayment: 'Proceder al Pago',
    closeCart: 'Cerrar carrito',
    addMoreForFreeShipping: 'Agrega $%amount% más para envío gratis',
    removeProduct: 'Eliminar producto',

    // Payment Methods
    paymentMethodsTitle: 'Métodos de Pago',
    totalToPay: 'Total a pagar',
    selectPaymentMethod: 'Selecciona tu método de pago',
    card: 'Tarjeta',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    cardInfo: 'Información de la Tarjeta',
    cardNumber: 'Número de Tarjeta',
    expirationDate: 'Fecha de Expiración',
    cvv: 'CVV',
    cardholderName: 'Nombre en la Tarjeta',
    paypalAccount: 'Cuenta PayPal',
    paypalEmail: 'Correo Electrónico de PayPal',
    paypalRedirect: 'Se te redirigirá a PayPal para completar el pago de forma segura.',
    applePayTitle: 'Apple Pay',
    useAppleDevice: 'Usa tu dispositivo Apple para pagar de forma segura.',
    payWithApplePay: 'Pagar con Apple Pay',
    processPayment: 'Procesar Pago',

    // Modals
    productDetails: 'Detalles del Producto',
    buyNow: 'Comprar Ahora',
    features: 'Características',
    reviews: 'reseñas',

    // Common
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    noProducts: 'No hay productos para esta categoría.'
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key, params = {}) => {
    let text = translations[language][key] || key;
    // Replace %param% with values
    Object.keys(params).forEach(param => {
      text = text.replace(`%${param}%`, params[param]);
    });
    return text;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};