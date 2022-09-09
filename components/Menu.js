import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div>
        <FontAwesomeIcon icon={faCode} className={styles.logo} />
      </div>
      <div>
        <Link href='/about'>О Курсе</Link>
      </div>
      <div>
        <Link href=''>Содержание</Link>
      </div>
    </nav>
  );
};

export default Menu;
