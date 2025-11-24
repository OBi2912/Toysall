import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo animate-slide-left">
            <div className="logo-icon">🎪</div>
            <div className="logo-text">
              <h1 className="logo-title">ToysAll</h1>
              <p className="logo-subtitle">{t('funWithoutLimits')}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link">{t('home')}</a>
            <a href="#categories" className="nav-link">{t('categories')}</a>
            <a href="#featured" className="nav-link">{t('featured')}</a>
            <a href="#deals" className="nav-link">{t('deals')}</a>
            <a href="#about" className="nav-link">{t('about')}</a>
            <Link to="/payment-methods" className="nav-link">{t('paymentMethods')}</Link>
          </nav>

          {/* Actions */}
          <div className="header-actions animate-slide-right">
            <button className="search-btn" aria-label={t('search')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            <button className="cart-btn" onClick={onCartClick} aria-label={t('cart')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
