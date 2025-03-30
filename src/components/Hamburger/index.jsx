import { useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./hamburger.module.css";

const HamburgerMenu = ({ onNavigate, currentPage }) => {
  const [open, setOpen] = useState(false);

  const getClass = (page) => {
    return currentPage === page ? styles.active : "";
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    setOpen(false);
  };

  return (
    <div className={styles.hamburgerWrapper}>
      <Hamburger
        size={24}
        toggled={open}
        toggle={setOpen}
        direction="left"
      />
      {open && (
        <div className={styles.menu}>
          <ul className={styles.navList}>
            <li>
              <a
                href="#"
                className={getClass("home")}
                onClick={(e) => handleClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={getClass("about")}
                onClick={(e) => handleClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={getClass("contact")}
                onClick={(e) => handleClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
