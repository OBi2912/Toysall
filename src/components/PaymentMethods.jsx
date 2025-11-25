import React, { useState } from 'react';
import './PaymentMethods.css';
import { useLanguage } from '../contexts/LanguageContext';

// High-quality SVG icons
const ICONS = {
    card: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
    ),
    paypal: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.794-9.067 6.794h-1.4c-.3 0-.552.216-.597.512l-1.47 9.208a.644.644 0 0 1-.635.54l.16-.251z" />
        </svg>
    ),
    apple: (
        <svg viewBox="0 0 384 512" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
        </svg>
    )
};

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
                        <div className="method-icon">{ICONS.card}</div>
                        {t('card')}
                    </button>
                    <button
                        className={`method-tab ${selectedMethod === 'paypal' ? 'active' : ''}`}
                        onClick={() => setSelectedMethod('paypal')}
                    >
                        <div className="method-icon">{ICONS.paypal}</div>
                        {t('paypal')}
                    </button>
                    <button
                        className={`method-tab ${selectedMethod === 'apple' ? 'active' : ''}`}
                        onClick={() => setSelectedMethod('apple')}
                    >
                        <div className="method-icon">{ICONS.apple}</div>
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
                                <div className="method-icon-small">{ICONS.apple}</div>
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
