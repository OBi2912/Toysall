import { useState } from 'react';
import Modal from './Modal';
import { useLanguage } from '../contexts/LanguageContext';
import './FeaturedProducts.css';

const products = [
    {
        id: 1,
        name: 'Robot Educativo Inteligente',
        category: 'Electrónicos',
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 234,
        image: '🤖',
        badge: 'Nuevo',
        badgeType: 'new'
    },
    {
        id: 2,
        name: 'Set de Construcción Mega',
        category: 'Construcción',
        price: 45.99,
        originalPrice: null,
        rating: 4.9,
        reviews: 567,
        image: '🏗️',
        badge: 'Popular',
        badgeType: 'popular'
    },
    {
        id: 3,
        name: 'Peluche Unicornio Gigante',
        category: 'Peluches',
        price: 34.99,
        originalPrice: 49.99,
        rating: 4.7,
        reviews: 892,
        image: '🦄',
        badge: 'Oferta',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'Drone con Cámara HD',
        category: 'Electrónicos',
        price: 129.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 156,
        image: '🚁',
        badge: 'Nuevo',
        badgeType: 'new'
    },
    {
        id: 5,
        name: 'Set de Arte Premium',
        category: 'Creatividad',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 423,
        image: '🎨',
        badge: 'Oferta',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'Balón de Fútbol Pro',
        category: 'Deportes',
        price: 24.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 678,
        image: '⚽',
        badge: 'Popular',
        badgeType: 'popular'
    },
    {
        id: 7,
        name: 'Consola de Videojuegos',
        category: 'Electrónicos',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.9,
        reviews: 1234,
        image: '🎮',
        badge: 'Popular',
        badgeType: 'popular'
    },
    {
        id: 8,
        name: 'Cohete Espacial Interactivo',
        category: 'Ciencia',
        price: 54.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 289,
        image: '🚀',
        badge: 'Nuevo',
        badgeType: 'new'
    },
    {
        id: 9,
        name: 'Osito de Peluche Suave',
        category: 'Bebés',
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.9,
        reviews: 445,
        image: '🧸',
        badge: 'Oferta',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'Set de Pintura Creativa',
        category: 'Preescolar',
        price: 24.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 312,
        image: '🎨',
        badge: 'Popular',
        badgeType: 'popular'
    },
    {
        id: 11,
        name: 'Muñeco de Acción Heroico',
        category: 'Niños',
        price: 14.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 567,
        image: '🦸',
        badge: 'Nuevo',
        badgeType: 'new'
    },
    {
        id: 12,
        name: 'Patines en Línea',
        category: 'Preadolescentes',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 198,
        image: '⛸️',
        badge: 'Oferta',
        badgeType: 'sale'
    },
    {
        id: 13,
        name: 'Auriculares Inalámbricos',
        category: 'Adolescentes',
        price: 49.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 756,
        image: '🎧',
        badge: 'Popular',
        badgeType: 'popular'
    },
    {
        id: 14,
        name: 'Kit de Experimentos Científicos',
        category: 'Educativos',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 423,
        image: '🧪',
        badge: 'Oferta',
        badgeType: 'sale'
    },
    {
        id: 15,
        name: 'Pelota de Baloncesto Profesional',
        category: 'Deportes',
        price: 29.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 334,
        image: '🏀',
        badge: 'Nuevo',
        badgeType: 'new'
    },
    {
        id: 16,
        name: 'Robot Programable Avanzado',
        category: 'Electrónicos',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.8,
        reviews: 287,
        image: '🤖',
        badge: 'Oferta',
        badgeType: 'sale'
    }
];

const FeaturedProducts = ({ onAddToCart }) => {
    const { t } = useLanguage();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddToCart = (product) => {
        onAddToCart(product);
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeProductModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="featured-products" id="featured">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">{t('bestSellers')}</span>
                    <h2 className="section-title">
                        {t('featuredProducts')}
                    </h2>
                    <p className="section-description">
                        {t('favoriteToys')}
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            onClick={() => openProductModal(product)}
                        >
                            <div className="product-badge-container">
                                <span className={`badge badge-${product.badgeType}`}>
                                    {product.badge}
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
                                    {product.originalPrice && (
                                        <span className="discount-badge">
                                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                        </span>
                                    )}
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

            {modalOpen && selectedProduct && (
                <Modal onClose={closeProductModal}>
                    <div className="product-modal-content">
                        <header className="product-modal-header">
                            <div className="product-modal-image">
                                <div className="product-emoji-large">{selectedProduct.image}</div>
                            </div>
                            <div className="product-modal-info">
                                <h2>{selectedProduct.name}</h2>
                                <span className="product-category">{selectedProduct.category}</span>
                                <div className="product-rating-modal">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'star-filled' : 'star-empty'}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="rating-score">{selectedProduct.rating}</span>
                                    <span className="reviews-count">({selectedProduct.reviews} reseñas)</span>
                                </div>
                                <div className="product-price-modal">
                                    <span className="current-price">${selectedProduct.price}</span>
                                    {selectedProduct.originalPrice && (
                                        <span className="original-price">${selectedProduct.originalPrice}</span>
                                    )}
                                    {selectedProduct.originalPrice && (
                                        <span className="discount-badge">
                                            -{Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}%
                                        </span>
                                    )}
                                </div>
                                {selectedProduct.badge && (
                                    <span className={`badge badge-${selectedProduct.badgeType}`}>
                                        {selectedProduct.badge}
                                    </span>
                                )}
                            </div>
                        </header>
                        <div className="product-modal-actions">
                            <button className="btn btn-primary" onClick={() => { handleAddToCart(selectedProduct); closeProductModal(); }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                {t('addToCart')}
                            </button>
                        </div>
                        <button className="modal-close-btn" onClick={closeProductModal} aria-label="Cerrar">
                            ✖
                        </button>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default FeaturedProducts;
