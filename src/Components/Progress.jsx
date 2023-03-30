import Calendar from "./Calendar/Calendar";
import DoneTasks from "./DoneTasks/DoneTasks";
import StopWatch from "./Stopwatch/StopWatch";
import SubmitBtn from "./SubmitBtn";

const Progress = () => {
  return (
    <>
      <div className="progress-top">
        <StopWatch />
        <DoneTasks />
      </div>
      <div className="progress-bottom">
        <SubmitBtn />
        <div style={{ margin: "0 15px" }}>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Progress;
