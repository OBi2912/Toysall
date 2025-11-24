import { useEffect } from 'react';
import './Modal.css';

/**
 * Modal component that closes when the Escape key is pressed or when the overlay is clicked.
 * Children are rendered inside the modal content.
 */
export default function Modal({ children, onClose }) {
    // Close on Escape
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    // Prevent click inside modal from closing
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={stopPropagation}>
                {children}
            </div>
        </div>
    );
}
