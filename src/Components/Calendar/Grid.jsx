import moment from "moment";
import Time from "../Stopwatch/Time";
import styles from "./Grid.module.css";
import TimeConvert from "../../helpers/TimeConvert";
import React, { useEffect, useState } from "react";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { dataBase } from "../../config";
import { useSelector } from "react-redux";
import DayModal from "./DayModal";

const Grid = ({ startDay, today }) => {
  const [data, setData] = useState();
  const [isDayModal, setIsDayModal] = useState(false);
  const [dayItem, setDayItem] = useState();
  const { id } = useSelector((state) => state.user);

  const day = startDay.clone().subtract(1, "day");
  const daysArr = [...Array(42)].map(() => day.add(1, "day").clone());

  useEffect(() => {
    (async function () {
      const docRef = doc(dataBase, "users", id);
      const docSnap = await getDoc(docRef);
      const data1 = docSnap.data();
      setData(data1);
    })();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(doc(dataBase, "users", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <div className={styles.gridWrapper}>
      {[...Array(7)].map((_, i) => (
        <div className={`${styles.weekDay} ${styles.rowInCell}`} key={i}>
          {moment()
            .day(i + 1)
            .format("ddd")}
        </div>
      ))}
      {daysArr.map((dayItem) => (
        <div
          className={styles.cellWrapper}
          key={dayItem.unix()}
          style={{
            backgroundColor:
              dayItem.day() === 6 || dayItem.day() === 0 ? "#ECECEC" : "",
            color: today.isSame(dayItem, "month") ? "black" : "#dbdbdb",
            borderRight: dayItem.day() === 0 && "none",
          }}
          onClick={() => {
            setIsDayModal(true);
            setDayItem(dayItem);
          }}
        >
          <div className={styles.rowInCell}>
            <div
              className={styles.dayWrapper}
              style={{
                backgroundColor: moment().isSame(dayItem, "day") && "#1976d2",
                color: moment().isSame(dayItem, "day") && "white",
              }}
            >
              {dayItem.format("D")}
            </div>
            <div className={styles.time}>
              {dayItem.format("x") <= Date.now() && (
                <Time
                  fontSize={16}
                  fw={200}
                  time={TimeConvert(dayItem, data)}
                  isMs={false}
                />
              )}
            </div>
          </div>
        </div>
      ))}
      {isDayModal && (
        <DayModal
          setIsDayModal={setIsDayModal}
          isDayModal={isDayModal}
          data={data}
          dayItem={dayItem}
        />
      )}
    </div>
  );
};

export default Grid;
