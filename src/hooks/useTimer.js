import { useState, useEffect } from "react";
import { setTime, setIsGoing, setLastTime } from "../store/slices/timeSlice";
import { useDispatch, useSelector } from "react-redux";

export const useTimer = () => {
  const dispatch = useDispatch();
  const { lastTime, isGoing } = useSelector((state) => state.time);

  // const { time, setTime, isGoing, setIsGoing, lastTime, setLastTime } =
  //   useContext(Context);

  const [startDate, setStartDate] = useState();

  useEffect(() => {
    if (localStorage.getItem("lastTime")) {
      // setIsGoing(2);
      dispatch(setIsGoing({ isGoing: 2 }));
      // setTime({
      //   ...time,
      //   h: Math.floor(lastTime / 1000 / 60 / 60) % 24,
      //   m: Math.floor(lastTime / 1000 / 60) % 60,
      //   s: Math.floor(lastTime / 1000) % 60,
      //   ms: Math.floor(lastTime % 1000),
      // });
      dispatch(
        setTime({
          time: {
            h:
              Math.floor(localStorage.getItem("lastTime") / 1000 / 60 / 60) %
              24,
            m: Math.floor(localStorage.getItem("lastTime") / 1000 / 60) % 60,
            s: Math.floor(localStorage.getItem("lastTime") / 1000) % 60,
            ms: Math.floor(localStorage.getItem("lastTime") % 1000),
          },
        })
      );
    }
  }, []);

  useEffect(() => {
    if (isGoing == 1) {
      const timeCount = setInterval(() => {
        const now = Date.now();
        const timeLeft = now - startDate;
        // setLastTime(timeLeft);
        dispatch(setLastTime({ lastTime: timeLeft }));

        // setTime({
        //   ...time,
        //   h: Math.floor(timeLeft / 1000 / 60 / 60) % 24,
        //   m: Math.floor(timeLeft / 1000 / 60) % 60,
        //   s: Math.floor(timeLeft / 1000) % 60,
        //   ms: Math.floor(timeLeft % 1000),
        // });
        dispatch(
          setTime({
            time: {
              h: Math.floor(timeLeft / 1000 / 60 / 60) % 24,
              m: Math.floor(timeLeft / 1000 / 60) % 60,
              s: Math.floor(timeLeft / 1000) % 60,
              ms: Math.floor(timeLeft % 1000),
            },
          })
        );
      });

      return () => {
        clearInterval(timeCount);
      };
    }
  }, [startDate, isGoing]);

  const start = () => {
    setStartDate(Date.now());
    // setIsGoing(1);
    dispatch(setIsGoing({ isGoing: 1 }));
  };

  const pause = () => {
    // setIsGoing(2);
    dispatch(setIsGoing({ isGoing: 2 }));
    localStorage.setItem("lastTime", JSON.stringify(lastTime));
  };

  const resume = () => {
    // setIsGoing(1);
    dispatch(setIsGoing({ isGoing: 1 }));
    setStartDate(Date.now() - lastTime);
  };

  const reset = () => {
    // setIsGoing(0);
    dispatch(setIsGoing({ isGoing: 0 }));
    // setTime({ h: 0, m: 0, s: 0, ms: 0 });
    dispatch(
      setTime({
        time: { h: 0, m: 0, s: 0, ms: 0 },
      })
    );
    localStorage.removeItem("lastTime");
  };

  return { isGoing, start, pause, reset, resume };
};
