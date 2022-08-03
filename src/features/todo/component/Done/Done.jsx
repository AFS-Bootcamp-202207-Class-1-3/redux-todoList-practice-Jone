import { useSelector } from "react-redux";

function Done() {
  const doneTodos = useSelector((state) => state.todo.todos)
    .filter((todo) => todo.done === true)
    .map((todo, index) => (
      <div key={todo.id}>
        <input value={todo.context} readOnly />
      </div>
    ));
  return <div className="done">{doneTodos}</div>;
}
export default Done;
