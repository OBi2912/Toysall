import Modal from './Modal';
import { useLanguage } from '../contexts/LanguageContext';
import './CategoryModal.css';

/**
 * Modal that shows product information for a given category.
 * Receives a `category` object (id, name, icon, description) and an array of `products`.
 */
export default function CategoryModal({ isOpen, onClose, category, products }) {
    const { t } = useLanguage();
    if (!isOpen || !category) return null;

    return (
        <Modal onClose={onClose}>
            <div className="category-modal-content">
                <header className="category-modal-header">
                    <h2>{category.icon} {category.name}</h2>
                    <p className="category-modal-description">{category.description}</p>
                </header>
                <section className="category-modal-products">
                    {products.length === 0 ? (
                        <p className="no-products">{t('noProducts')}</p>
                    ) : (
                        <ul className="product-list">
                            {products.map((p) => (
                                <li key={p.id} className="product-item">
                                    <div className="product-emoji">{p.emoji}</div>
                                    <div className="product-info">
                                        <h4 className="product-name">{p.name}</h4>
                                        <p className="product-price">${p.price}</p>
                                        <div className="product-rating">
                                            <div className="stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={i < Math.floor(parseFloat(p.rating)) ? 'star-filled' : 'star-empty'}>
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="rating-score">{p.rating}</span>
                                            <span className="reviews-count">({p.reviews} {t('reviews')})</span>
                                        </div>
                                        <p className="product-description">{p.description}</p>
                                        <div className="product-features">
                                            <h5>{t('features')}:</h5>
                                            <ul>
                                                {p.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
                <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
                    ✖
                </button>
            </div>
        </Modal>
    );
}
