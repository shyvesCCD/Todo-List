import { Lista, Label, Buttom, Input } from "./styles";

const Todo = ({ todo, handleRemove, handleTodo }) => {
  return (
    <>
      <Lista>
        <Label
          htmlFor={todo.title}
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
        >
          <Input id={todo.title} onChange={handleTodo} />
          {todo.title}
        </Label>
        <Buttom id="delete" onClick={handleRemove}>
          X
        </Buttom>
      </Lista>
    </>
  );
};

export default Todo;
