import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}

export default TodoList;
