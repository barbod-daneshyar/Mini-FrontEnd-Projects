import Choices from "./components/Choices";
import InputBox from "./components/InputBox";
import TasksList from "./components/TasksList";
import TodoContextProvider from "./TodoContext";
import 'bootstrap/dist/css/bootstrap.css'

const styleSection: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#666",
};

const Todo = () => {
  return (
    <section style={styleSection}>
      <TodoContextProvider>
        <section>
          <TasksList />
          <Choices />
          <InputBox />
        </section>
      </TodoContextProvider>
    </section>
  );
};

export default Todo;
