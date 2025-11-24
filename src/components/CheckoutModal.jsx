import React from 'react';
import Modal from './Modal';
import PaymentMethods from './PaymentMethods';
import './CheckoutModal.css';

/**
 * Checkout modal that lets the user select a payment method and fill the appropriate form.
 * Props:
 *   - isOpen: boolean
 *   - onClose: function
 *   - total: number (total amount to pay)
 */
export default function CheckoutModal({ isOpen, onClose, total }) {
    if (!isOpen) return null;
    const [method, setMethod] = React.useState('card'); // default payment method

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo purposes just alert the chosen method
        alert(`Pago de $${total.toFixed(2)} con ${method}`);
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <PaymentMethods total={total} />
        </Modal>
    );
}
