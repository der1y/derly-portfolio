import styles from './NavBar.module.css';

export default function NavBar() {

    return (
        <div className={styles.header}>
            <div> Derly Jordan Aguirre</div>
            <nav className={styles.nav}>
                <div> Resume </div>
                <div> Get in touch! </div>
            </nav>
        </div>
    )
}