"use client";

import React, { useState } from "react";
import styles from "./navigation.module.scss";
import BurgerIcon from "@/components/burgerIcon/BurgerIcon";

const Navigation = () => {
  const pages = ["Works", "Blog", "Contacts"];
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={styles.burger_menu}>
        <BurgerIcon toggleMenu={toggleMenu} isOpen={open} />
      </div>
      <ul className={`${styles.navigation} container ${open && styles.open}`}>
        {pages.map((page, index) => (
          <li key={index} className={styles.navigation_item}>
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
