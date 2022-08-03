import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
function TodoGroup() {
  const todos = useSelector((state) => state.todo.todos);
  const todoList = todos.map((todo, index) => (
    <TodoItem key={todo.id} index={index} todo={todo}/>
  ));
  return <div>{todoList}</div>;
}

export default TodoGroup;
