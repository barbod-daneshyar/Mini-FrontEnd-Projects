import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TaskProps_t } from "./types";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const checkboxStyle: React.CSSProperties = {
  width: 15,
  color: "green",
};

const Task = ({ task, choice }: TaskProps_t) => {
  const context = useContext(TodoContext);
  const styleRadioIcon: React.CSSProperties = {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: `${task.flag} 2px solid`,
    backgroundColor: "#1D1E1F",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const formGroupStyle = {
    width: 505,
    justifyContent: "space-between",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: "1rem 0",
    borderBottom: "#2C2B2C solid 1px",
    display: taskShowStatus(),
  };
  const h4Style: React.CSSProperties = {
    width: 390,
    margin: "0 1.2rem",
    textAlign: "left",
    fontSize: 20,
    textDecoration: choice && task.selected ? "line-through" : "none",
    color: "white",
  };
  const handleRemove = () => {
    context.remove(task);
  };
  const handleSelected = () => {
    context.select(task);
  };
  const checkMarkStatus = () => {
    if (task.selected) {
      return "block";
    } else {
      return "none";
    }
  };
  const trashStatus = () => {
    if (task.selected) {
      return "none";
    } else {
      return "block";
    }
  };
  function taskShowStatus() {
    return !choice && task.selected ? "none" : "flex";
  }

  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
      >
        <ListGroup.Item style={formGroupStyle} as="li" active>
          <div style={styleRadioIcon} onClick={handleSelected}>
            <AiOutlineCheck display={checkMarkStatus()} style={checkboxStyle} />
          </div>
          <h4 style={h4Style}>{task.title}</h4>
          <FaTrashAlt
            display={trashStatus()}
            cursor="pointer"
            onClick={handleRemove}
            color="red"
          />
        </ListGroup.Item>
      </motion.div>
    </AnimatePresence>
  );
};

export default Task;
