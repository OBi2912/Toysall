import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Cart.css';

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
    const { t } = useLanguage();
    // Lock body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    const navigate = useNavigate();

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                <div className="cart-content">
                    <div className="cart-header">
                        <h2 className="cart-title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            {t('shoppingCart')}
                            {items.length > 0 && <span className="cart-count">({items.length})</span>}
                        </h2>
                        <button className="cart-close" onClick={onClose} aria-label={t('closeCart')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <div className="empty-icon">🛒</div>
                            <h3>{t('yourCartIsEmpty')}</h3>
                            <p>{t('addAmazingToys')}</p>
                            <button className="btn btn-primary" onClick={onClose}>{t('continueShopping')}</button>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {items.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-image">
                                            <div className="cart-item-emoji">{item.image}</div>
                                        </div>
                                        <div className="cart-item-info">
                                            <h4 className="cart-item-name">{item.name}</h4>
                                            <p className="cart-item-category">{item.category}</p>
                                            <div className="cart-item-price">${item.price}</div>
                                        </div>
                                        <div className="cart-item-actions">
                                            <div className="quantity-controls">
                                                <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                                <span className="quantity-value">{item.quantity}</span>
                                                <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <button className="remove-btn" onClick={() => onRemoveItem(item.id)} aria-label={t('removeProduct')}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <div className="summary-row"><span>{t('subtotal')}</span><span>${subtotal.toFixed(2)}</span></div>
                                <div className="summary-row"><span>{t('shipping')}</span><span>{shipping === 0 ? t('free') : `$${shipping.toFixed(2)}`}</span></div>
                                {subtotal < 50 && (
                                    <div className="free-shipping-notice">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 16v-4M12 8h.01" />
                                        </svg>
                                        {t('addMoreForFreeShipping', { amount: (50 - subtotal).toFixed(2) })}
                                    </div>
                                )}
                                <div className="summary-divider"></div>
                                <div className="summary-row summary-total"><span>{t('total')}</span><span className="total-amount">${total.toFixed(2)}</span></div>
                                <button className="btn btn-primary checkout-btn" onClick={() => { onClose(); navigate('/payment-methods'); }}>
                                    <span>{t('proceedToPayment')}</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
