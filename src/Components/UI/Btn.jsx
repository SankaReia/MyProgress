import React from "react";
import styles from "./Btn.module.css";

const Btn = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} className={styles.btn} style={style}>
      {children}
    </button>
  );
};
export default Btn;
