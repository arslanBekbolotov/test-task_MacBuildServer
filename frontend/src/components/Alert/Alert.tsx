import styles from "./alert.module.scss";
import React from "react";

interface Props {
  message: string;
  bgColor?: string;
}

const Alert: React.FC<Props> = ({ message, bgColor }) => {
  return (
    <div className={styles.alert} style={{ background: bgColor }}>
      {message}
    </div>
  );
};

export default Alert;
