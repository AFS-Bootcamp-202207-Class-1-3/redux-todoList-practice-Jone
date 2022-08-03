import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../api/todoApi";
import { onDelete, onToggle } from "../../todoSlice";
import "./TodoItem.css";
function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(onToggle(todo.id));
  };

  const changeDelete = () => {
    deleteTodo(todo.id).then(response => {
      dispatch(onDelete(response.data.id));
    })
  };
  return (
    <div>
      <input
        className={todo.done ? "show-text-decoration" : ""}
        value={todo.context}
        onClick={handleClick}
        readOnly
      />
      <button className="delete-btn" onClick={changeDelete}>
        delete
      </button>
    </div>
  );
}

export default TodoItem;
