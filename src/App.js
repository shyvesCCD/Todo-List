import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const todo = {
      title: text,
      done: false,
      id: Math.random(),
    };
    setTodos([...todos, todo]);
  };

  const handleRemove = (todo) => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const handleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  return (
    <div className="main">
      <Header />
      <Main addTodo={addTodo} todos={todos} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleRemove={() => handleRemove(todo)}
            handleTodo={() => handleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
