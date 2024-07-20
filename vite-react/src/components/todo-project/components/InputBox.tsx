import { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Action_Add_t, TodoContext } from "../TodoContext";
import { Flag_t } from "../GenericTypes";
import { BsFlagFill } from "react-icons/bs";

const inputStyle: React.CSSProperties = {
  width: 400,
  backgroundColor: "#6d6d6d",
  color: "white",
  border: "none",
};
const formGroupStyle: React.CSSProperties = {
  width: 460,
  display: "flex",
  justifyContent: "space-between",
};
const formStyle: React.CSSProperties = {
  borderRadius: "10px",
  padding: "1.5rem",
  backgroundColor: "#222",
  marginBottom:"1.5rem"
};
const buttonStyle: React.CSSProperties = {
  border: "none",
};

const InputBox = (_: React.ComponentProps<"input">) => {
  const context = useContext(TodoContext);
  const inputRef = useRef({} as HTMLInputElement);
  const [flag, setFlag] = useState<Flag_t>("gray");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: Action_Add_t["payload"] = {
      title: inputRef.current.value,
      flag,
    };
    context.add(payload);
    inputRef.current.value = "";
  };
  const handleFlag = (color: Flag_t) => {
    setFlag(color);
    inputRef.current.focus();
  };

  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: "1rem" , display: "flex" }}>
        {Array<Flag_t>("gray", "blue", "brown", "red").map((color, index) => (
          <BsFlagFill
            key={index}
            onClick={() => handleFlag(color)}
            color={color}
            fontSize="1.5em"
            cursor="pointer"
            filter={flag === color ? "brightness(2)" : "brightness(.2)"}
          />
        ))}
      </Form.Group>
      <Form.Group style={formGroupStyle}>
        <Form.Control
          style={inputStyle}
          ref={inputRef}
          placeholder="Task title"
        />
        <Button variant="success" style={buttonStyle} type="submit">
          Add
        </Button>
      </Form.Group>
    </Form>
  );
};

export default InputBox;
