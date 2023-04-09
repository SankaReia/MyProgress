import Calendar from "./Calendar/Calendar";
import DoneTasks from "./DoneTasks/DoneTasks";
import StopWatch from "./Stopwatch/StopWatch";
import SubmitBtn from "./SubmitBtn";
import useAuth from "../hooks/useAuth";

const Progress = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <div className="progress-top">
        <StopWatch />
        <DoneTasks />
      </div>
      <div className="progress-bottom">
        <SubmitBtn />
        <div style={{ margin: "0 15px" }}>{isAuth && <Calendar />}</div>
      </div>
    </>
  );
};

export default Progress;
