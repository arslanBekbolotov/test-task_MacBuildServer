import React from "react";
import styles from "./burgerIcon.module.scss";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerIcon: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${styles.burger_icon} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
