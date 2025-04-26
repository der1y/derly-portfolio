import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ onClose, children }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button styles={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Derly's Resumé</h2>
                {children}
            </div>
        </div>
    );
}