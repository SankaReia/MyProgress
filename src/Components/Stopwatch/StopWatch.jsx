import Time from "./Time";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const StopWatch = () => {
  const time = useSelector((state) => state.time.time);
  // const { time } = useContext(Context);

  return (
    <div>
      <Time fontSize={60} time={time} isMs={true} fw={600} />
      <Buttons />
    </div>
  );
};

export default StopWatch;
