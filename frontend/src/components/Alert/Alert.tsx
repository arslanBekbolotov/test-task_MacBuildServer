import styles from "./alert.module.scss"
import React from "react";

interface Props{
    message:string;
}

const Alert:React.FC<Props> = ({ message }) => {
    return (
        <div className={styles.alert}>
            {message}
        </div>
    );
};

export default Alert;