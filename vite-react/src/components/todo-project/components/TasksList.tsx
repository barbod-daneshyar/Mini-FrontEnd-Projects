import { useContext } from "react";
import Task from "./Task";
import { TodoContext } from "../TodoContext";
import { ListGroup } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

const TasksList = () => {
  const context = useContext(TodoContext);
  return context.state.length > 0 ? (
    <ListGroup style={{ borderRadius: "0", marginBottom: "1rem" }}>
      {["red", "brown", "blue", "gray"].map((color) =>
        context.state.map((task, index) => {
          if (task.flag === color) return <Task task={task} key={index} />;
        })
      )}
    </ListGroup>
  ) : (
    <AnimatePresence>
      <motion.h1
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        style={{ color: "white", margin: "1rem", textAlign: "center" }}
      >
        Todo List is Empty
      </motion.h1>
      ;
    </AnimatePresence>
  );
};
export default TasksList;
