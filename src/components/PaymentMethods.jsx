import React from 'react';
import './PaymentMethods.css';
import creditCardSvg from '../assets/icons/credit-card.svg?raw';
import paypalSvg from '../assets/icons/paypal.svg?raw';
import appleSvg from '../assets/icons/apple.svg?raw';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Component that displays external payment method options.
 * Each option is an anchor that opens the external payment page in a new tab.
 * The SVG icons are the official logos (or close approximations).
 */
import { useState } from 'react';

export default function PaymentMethods({ total }) {
    const { t } = useLanguage();
    const formattedTotal = total ? total.toFixed(2) : '0.00';
    const [selectedMethod, setSelectedMethod] = useState('card');

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo purposes
        alert(`Pago de $${formattedTotal} procesado con ${selectedMethod}`);
    };

    return (
        <div className="payment-methods-page">
            <h2>{t('paymentMethodsTitle')}</h2>
            <p>{t('totalToPay')}: <strong>${formattedTotal}</strong></p>

            <div className="payment-methods">
                <div className="method-tabs">
                    <button
                        className={`method-tab ${selectedMethod === 'card' ? 'active' : ''}`}
                        onClick={() => setSelectedMethod('card')}
                    >
                        <div style={{width: '20px', height: '20px'}} dangerouslySetInnerHTML={{__html: creditCardSvg}} />
                        {t('card')}
                    </button>
                    <button
                        className={`method-tab ${selectedMethod === 'paypal' ? 'active' : ''}`}
                        onClick={() => setSelectedMethod('paypal')}
                    >
                        <div style={{width: '20px', height: '20px'}} dangerouslySetInnerHTML={{__html: paypalSvg}} />
                        {t('paypal')}
                    </button>
                    <button
                        className={`method-tab ${selectedMethod === 'apple' ? 'active' : ''}`}
                        onClick={() => setSelectedMethod('apple')}
                    >
                        <div style={{width: '20px', height: '20px'}} dangerouslySetInnerHTML={{__html: appleSvg}} />
                        {t('applePay')}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="payment-form">
                    {selectedMethod === 'card' && (
                        <div className="card-fields">
                            <h3>{t('cardInfo')}</h3>
                            <label>
                                {t('cardNumber')}
                                <input type="text" placeholder="1234 5678 9012 3456" required />
                            </label>
                            <div className="inline">
                                <label>
                                    {t('expirationDate')}
                                    <input type="text" placeholder="MM/YY" required />
                                </label>
                                <label>
                                    {t('cvv')}
                                    <input type="text" placeholder="123" required />
                                </label>
                            </div>
                            <label>
                                {t('cardholderName')}
                                <input type="text" placeholder="Juan Pérez" required />
                            </label>
                        </div>
                    )}

                    {selectedMethod === 'paypal' && (
                        <div className="paypal-fields">
                            <h3>{t('paypalAccount')}</h3>
                            <label>
                                {t('paypalEmail')}
                                <input type="email" placeholder="tu@email.com" required />
                            </label>
                            <p>{t('paypalRedirect')}</p>
                        </div>
                    )}

                    {selectedMethod === 'apple' && (
                        <div className="apple-fields">
                            <h3>{t('applePayTitle')}</h3>
                            <p>{t('useAppleDevice')}</p>
                            <button type="button" className="apple-pay-btn">
                                <div style={{width: '24px', height: '24px'}} dangerouslySetInnerHTML={{__html: appleSvg}} />
                                {t('payWithApplePay')}
                            </button>
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary">{t('processPayment')}</button>
                </form>
            </div>
        </div>
    );
}
