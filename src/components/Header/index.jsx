import styles from './header.module.css';
import Navigation from '../Navigation';
import HamburgerMenu from '../Hamburger';


const Header = ({onNavigate, currentPage, title}) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="Bild1"/>
            <HamburgerMenu onNavigate={onNavigate} currentPage={currentPage} />
            <h1 className={styles.pageTitle}>{title}</h1>
            
            <Navigation onNavigate={onNavigate} currentPage={currentPage} />
        </header>

    )
}
    
export default Header;