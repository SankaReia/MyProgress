import React from "react";
import styles from "./Header.module.css";

const Header = ({ today, onPrevMonth, onNextMonth, onCurrentMonth }) => {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <span>
          <b>{today.format("MMMM")} </b>
        </span>
        <span>{today.format("YYYY")}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => onPrevMonth()}>&lt;</button>
        <button onClick={() => onCurrentMonth()}>Today</button>
        <button onClick={() => onNextMonth()}>&gt;</button>
      </div>
    </div>
  );
};

export default Header;
