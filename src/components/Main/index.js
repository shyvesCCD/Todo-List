import { useState } from "react";
import { Buttom, Form, Input, Title } from "./styles";

const Main = ({ addTodo, todos }) => {
  const [value, setValue] = useState("");

  const handleSubmitToDo = (event) => {
    if (value === "") {
      alert("Não entre tarefas vazias!");
    } else {
      event.preventDefault();
      addTodo(value);
      setValue("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmitToDo}>
        <Buttom>+</Buttom>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Adicionar uma Tarefa"
        ></Input>
      </Form>
      <Title>Tarefas - {todos.length}</Title>
    </>
  );
};

export default Main;
