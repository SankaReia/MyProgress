import Btn from "../UI/Btn";
import { useTimer } from "../../hooks/useTimer";

const Buttons = () => {
  const { isGoing, start, pause, reset, resume } = useTimer();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      {isGoing == 0 && <Btn onClick={() => start()}>start</Btn>}
      {isGoing == 1 && <Btn onClick={() => pause()}>pause</Btn>}
      {isGoing == 2 && (
        <>
          <Btn onClick={() => resume()}>resume</Btn>
          <Btn onClick={() => reset()}>reset</Btn>
        </>
      )}
    </div>
  );
};

export default Buttons;
