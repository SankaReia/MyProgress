const DoneTaskItem = ({ task, id, onDelete }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <li>{task.title}</li>
        <span
          style={{ cursor: "pointer" }}
          className="material-symbols-outlined"
          onClick={() => onDelete(id)}
        >
          delete
        </span>
      </div>
      <hr style={{ margin: 0 }} />
    </>
  );
};

export default DoneTaskItem;
