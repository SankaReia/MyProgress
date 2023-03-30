import moment from "moment/moment";
import React, { useState } from "react";
import Header from "./Header";
import Grid from "./Grid";

function Calendar() {
  moment.updateLocale("en", { week: { dow: 1 } });
  //задали что неделя начинается с понедельника(1), в США с воскр(0)

  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  //сначала получаемый первый день месяца, потом первый день недели

  const prevMonthHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };

  const currentMonthHandler = () => {
    setToday(moment());
  };

  const nextMonthHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header
        today={today}
        onPrevMonth={prevMonthHandler}
        onCurrentMonth={currentMonthHandler}
        onNextMonth={nextMonthHandler}
      />
      <Grid startDay={startDay} today={today} />
    </div>
  );
}

export default Calendar;
