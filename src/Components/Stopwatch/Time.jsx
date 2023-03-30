import styles from "./Time.module.css";

const Time = ({ fontSize, time, isMs, fw }) => {
  return (
    <div className={styles.watch}>
      <div style={{ fontSize: `${fontSize}px`, fontWeight: `${fw}` }}>
        <div>{time.h < 10 ? "0" + time.h : time.h}</div>:
        <div>{time.m < 10 ? "0" + time.m : time.m}</div>:
        <div>{time.s < 10 ? "0" + time.s : time.s}</div>
      </div>
      {isMs && (
        <div
          className={styles.milliseconds}
          style={{ fontSize: `${fontSize * 0.66}px` }}
        >
          .
          {time.ms < 100
            ? "0" + (time.ms < 10 ? "0" + time.ms : time.ms)
            : time.ms}
        </div>
      )}
    </div>
  );
};

export default Time;
