import React, { useContext, useEffect, useState, useRef } from "react";

import styles from "../../styles/nav.module.scss";
import {
  FiMoon,
  FiSun,
  FiHelpCircle,
  FiPackage,
  FiTwitter,
  FiLogOut,
  FiGrid,
  FiChevronDown,
  FiX,
  FiHeart,
} from "react-icons/fi";

function Nav() {
  const [ddShown, setDDShown] = useState(false);
  const navRef = useRef(null);

  return (
    <header className={`container ${styles.navContainer}`}>
      <div className={styles.brand}>
        <a href="/">macpack</a>
        {/* <span className="preview">&nbsp;(preview)</span> */}
      </div>

      <div className={styles.nav} ref={navRef}>
        <a href="/apps">
          <FiPackage />
          <p>Apps</p>
        </a>

        <a href="/packs">
          <FiGrid />
          <p>Packs</p>
        </a>

        <a
          href="https://ko-fi.com/mehedi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.justIcon}
        >
          <FiHeart />
          <p className={styles.ddOnly}>Support winstall</p>
        </a>
        <span className={styles.justIcon}>
          <FiMoon className="moon" />
          <FiSun className="sun" />
          <p className={styles.ddOnly}>Switch theme</p>
        </span>
        {/* <User /> */}
      </div>

      <span className={`mobileDD ${styles.dropdown}`}>
        {ddShown ? <FiX /> : <FiChevronDown />}
      </span>
    </header>
  );
}

export default Nav;
