import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import Task from "./Task";
import { Button, ListGroup } from "react-bootstrap";


const style: React.CSSProperties = {
  borderRadius: 0,
  borderTop: "dashed gray 5px",
  paddingTop: "1rem",
  marginBottom: "1rem",
};

const Choices = () => {
  const context = useContext(TodoContext);

  function handleRemoveSelecteds() {
    context.state.forEach((task) => {
      if (task.selected) context.remove(task);
    });
  }

  return context.state.some((item) => {
    return item.selected;
  }) ? (
    <ListGroup style={style}>
      {context.state.map((task, index) => {
        if (task.selected) return <Task choice key={index} task={task} />;
      })}
      <Button
        className="mt-3 bg-danger border-0"
        onClick={handleRemoveSelecteds}
      >
        Delete
      </Button>
    </ListGroup>
  ) : null;
};

export default Choices;

