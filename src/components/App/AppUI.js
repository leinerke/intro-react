import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError/TodoError";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { EmptyTodo } from "../EmptyTodo/EmptyTodo";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}
        {searchedTodos.map((todo, key) => (
          <TodoItem
            key={key}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodo(key)}
            onDelete={() => deleteTodo(key)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton />
    </>
  );
}

export { AppUI };