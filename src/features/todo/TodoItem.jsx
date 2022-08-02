import { useDispatch } from "react-redux";
import { onDelete, onToggle } from "./todoSlice";
import "../../static/css/TodoItem.css";
function TodoItem(props) {
  const { todo, index } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(onToggle(index));
  };

  const changeDelete = () => {
    dispatch(onDelete(index));
  };
  return (
    <div>
      <input className={todo.done ? "show-text-decoration":""} value={todo.context} onClick={handleClick} readOnly/>
      <button className="delete-btn" onClick={changeDelete}>delete</button>
    </div>
  );
}

export default TodoItem;
