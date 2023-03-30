const TimeConvert = (dayItem, data) => {
  // const dataBase = JSON.parse(localStorage.getItem("dataBase"));
  const empty = { h: 0, m: 0, s: 0, ms: 0 };
  try {
    if (!data) return empty;

    if (data[dayItem.format("YYYY")][dayItem.format("MMMM")]) {
      const day = data[dayItem.format("YYYY")][dayItem.format("MMMM")].find(
        (day) => day.date === dayItem.format("DD.MM.YYYY")
      );

      const obj =
        day == undefined
          ? empty
          : {
              h: Math.floor(day.time / 1000 / 60 / 60) % 24,
              m: Math.floor(day.time / 1000 / 60) % 60,
              s: Math.floor(day.time / 1000) % 60,
              ms: Math.floor(day.time % 1000),
            };

      return obj;
    }
  } catch (error) {
    console.log(error);
  }
  return empty;
};
export default TimeConvert;
