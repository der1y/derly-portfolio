import styles from './NavBar.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';


export default function NavBar() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => { setIsModalOpen(true) };
    const handleClose = () => { setIsModalOpen(false) };

    return (
        <div className={styles.header}>
            <div> Derly Jordan Aguirre</div>
            <nav className={styles.nav}>
                <button type="button" onClick={handleOpen}> Resumé </button>
                <a className={styles.greenText} href="https://www.linkedin.com/in/derlyjordan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className={styles.greenText} href="https://github.com/der1y" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:derlyaguirre1@gmail.com">
                    <button className={styles.getInTouch} type="button"> Get in touch! </button>
                </a>
            </nav>

            {isModalOpen && (
                <Modal onClose={handleClose}>
                    <embed
                        src="/derly-portfolio/Derly_JordanAguirre_Resume.pdf"
                        type="application/pdf"
                        width="100%"
                        height="600px"
                    />
                </Modal>
            )}
        </div>
    )
}