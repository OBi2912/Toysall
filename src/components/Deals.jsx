import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './FeaturedProducts.css'; // Reuse the same styles

const dealsProducts = [
    {
        id: 101,
        name: 'Peluche Unicornio Gigante',
        category: 'Peluches',
        price: 34.99,
        originalPrice: 49.99,
        rating: 4.7,
        reviews: 892,
        image: '🦄',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 30
    },
    {
        id: 102,
        name: 'Set de Arte Premium',
        category: 'Creatividad',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 423,
        image: '🎨',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 33
    },
    {
        id: 103,
        name: 'Consola de Videojuegos',
        category: 'Electrónicos',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.9,
        reviews: 1234,
        image: '🎮',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 20
    },
    {
        id: 104,
        name: 'Osito de Peluche Suave',
        category: 'Bebés',
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.9,
        reviews: 445,
        image: '🧸',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 33
    },
    {
        id: 105,
        name: 'Patines en Línea',
        category: 'Preadolescentes',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 198,
        image: '⛸️',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 20
    },
    {
        id: 106,
        name: 'Kit de Experimentos Científicos',
        category: 'Educativos',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 423,
        image: '🧪',
        badge: 'Oferta',
        badgeType: 'sale',
        discount: 33
    }
];

const Deals = ({ onAddToCart }) => {
    const { t } = useLanguage();
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleAddToCart = (product) => {
        onAddToCart(product);
    };

    return (
        <section className="featured-products" id="deals">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">{t('specialOffers')}</span>
                    <h2 className="section-title">
                        {t('productsOnSale')}
                    </h2>
                    <p className="section-description">
                        {t('exclusiveDiscounts')}
                    </p>
                </div>

                <div className="products-grid">
                    {dealsProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="product-badge-container">
                                <span className={`badge badge-${product.badgeType}`}>
                                    {product.badge}
                                </span>
                                <span className="discount-badge">
                                    -{product.discount}%
                                </span>
                            </div>

                            <div className="product-image">
                                <div className="product-emoji">{product.image}</div>
                            </div>

                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>

                                <div className="product-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="reviews-count">({product.reviews})</span>
                                </div>

                                <div className="product-price-container">
                                    <div className="product-price">
                                        <span className="current-price">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="original-price">${product.originalPrice}</span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    className={`add-to-cart-btn ${hoveredProduct === product.id ? 'btn-hovered' : ''}`}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                    <span>{t('addToCart')}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Deals;