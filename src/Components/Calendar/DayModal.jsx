import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TimeConvert from "../../helpers/TimeConvert";
import Time from "../Stopwatch/Time";
import TasksConvert from "../../helpers/TasksConvert";

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

const DayModal = ({ isDayModal, setIsDayModal, data, dayItem }) => {
  const tasks = TasksConvert(data, dayItem);

  return (
    <Modal
      open={isDayModal}
      onClose={() => setIsDayModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {dayItem.format("DD.MM.YYYY")}
        </Typography>
        <Time fontSize={40} time={TimeConvert(dayItem, data)} isMs={true} />
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
      </Box>
    </Modal>
  );
};
export default DayModal;
