import Time from "./Stopwatch/Time";
import { useDispatch, useSelector } from "react-redux";
import { clearOnSubmit } from "../store/slices/timeSlice";
import { setDoc, getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { dataBase } from "../config";
import { Box, Typography, Modal, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalSubmit = ({ setIsModal, isModal }) => {
  const { time, tasks, lastTime } = useSelector((state) => state.time);
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const year = new Date().getFullYear();
  const month = new Date().toLocaleDateString("en-En", { month: "long" });

  const submitHadler = async () => {
    const dayData = {
      date: new Date().toLocaleDateString(),
      time: lastTime,
      tasks: tasks,
    };

    try {
      const docRef = doc(dataBase, "users", id);
      const docSnap = await getDoc(docRef);
      //data хранит в себе весь объект из базыданных:
      const data = docSnap.data();

      if (!data)
        // При первом условии проверяется есть ли база данных, если нет то создается новый
        await setDoc(docRef, { [year]: { [month]: arrayUnion(dayData) } });
      if (!data[year][month])
        //Проверяется наличие текущего месяца
        await updateDoc(docRef, { [`${year}.${month}`]: arrayUnion(dayData) });

      // Следующий if Проверяет последний день в базе с текущим днем
      if (
        dayData.date === data[year][month][data[year][month].length - 1].date
      ) {
        // Если есть  совпадение то создается новый объект в котором к данным из базы по сегодняшнему дню добавляются новые
        const dayUpd = {
          date: new Date().toLocaleDateString(),
          time: lastTime + data[year][month][data[year][month].length - 1].time,
          tasks: tasks.concat(
            data[year][month][data[year][month].length - 1].tasks
          ),
        };
        // monthArr хранит в себе массив дней текущего месяца
        const monthArr = data[year][month];
        // Далее из него удаляется последний элемент и добавляется обновленный день dayUpd
        monthArr.pop();
        monthArr.push(dayUpd);
        // Далее целиком перезаписывается массив месяца
        await updateDoc(docRef, { [`${year}.${month}`]: monthArr });
      } else {
        // Если новый день, тогда он просто добавлется в массив месяца
        await updateDoc(docRef, {
          [`${year}.${month}`]: arrayUnion(dayData),
        });
      }
    } catch (error) {
      console.log(error);
    }

    dispatch(clearOnSubmit());
    setIsModal(false);
    localStorage.removeItem("lastTime");
    localStorage.setItem("doneTasks", "[]");
  };

  return (
    <Modal
      open={isModal}
      onClose={() => setIsModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {new Date().toLocaleDateString()}
        </Typography>
        <Time fontSize={40} time={time} isMs={true} />
        <div>
          {tasks.length !== 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {tasks.map((task, id) => (
                <li key={`${task.id}`}>{`${id + 1}. ${task.title}`}</li>
              ))}
            </ul>
          ) : (
            <span>No Tasks!</span>
          )}
        </div>
        <Button variant="outlined" onClick={submitHadler}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalSubmit;
