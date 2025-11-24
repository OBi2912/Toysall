import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Deals from './components/Deals';
import Cart from './components/Cart';
import Footer from './components/Footer';
import PaymentMethods from './components/PaymentMethods';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show cart briefly
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total amount for payment
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 50 ? 0 : 5.99) : 0;
  const totalAmount = subtotal + shipping;

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <LanguageProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header
                cartCount={totalItems}
                onCartClick={() => setIsCartOpen(true)}
              />

              <main>
                <Hero />
                <Categories />
                <FeaturedProducts onAddToCart={handleAddToCart} />
                <Deals onAddToCart={handleAddToCart} />
              </main>

              <Footer />

              <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </>
          } />
          <Route path="/payment-methods" element={
            <>
              <header style={{ padding: '1rem', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                    ← Continuar Comprando
                  </Link>
                </div>
              </header>

              <main style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <PaymentMethods total={totalAmount} />
              </main>

              <Footer />
            </>
          } />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
