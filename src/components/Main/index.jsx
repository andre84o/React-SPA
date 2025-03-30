import styles from './main.module.css';
import Home from '../../Pages/Home';
import Contact from '../../Pages/Contact';
import About from '../../Pages/About';

const Main = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className={styles.main}>
      {renderPage()}
    </main>
  );
};

export default Main;
