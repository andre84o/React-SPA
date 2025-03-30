import styles from './navigation.module.css'

const Navigation = ({ onNavigate, currentPage }) => {
    const getClass = (page) => {
        return currentPage === page ? styles.active : "";
      };
  
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#" className={getClass("home")} onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>Home</a></li>
          <li><a href="#" className={getClass("about")} onClick={(e) => { e.preventDefault(); onNavigate("about"); }}>About</a></li>
          <li><a href="#" className={getClass("contact")} onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>Contact</a></li>
        </ul>
      </nav>
    );
  };
  


export default Navigation;