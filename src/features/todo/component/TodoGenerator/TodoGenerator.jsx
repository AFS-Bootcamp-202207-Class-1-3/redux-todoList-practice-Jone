import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../../api/todoApi";
import { addTodo } from "../../todoSlice";
import "./TodoGenerator.css";
function TodoGenerator() {
  const [inputeText, setInputeText] = useState("");
  const dispatch = useDispatch();

  const updateInpute = (event) => {
    setInputeText(event.target.value);
  };

  const handleAddTodoEvent = () => {
    if (inputeText === "") {
      alert("输入的字符串不能为空！");
      return;
    }
    saveTodo({ context: inputeText }).then((response) => {
      dispatch(addTodo(response.data));
    });
    setInputeText("");
  };

  return (
    <div>
      <input type="text" value={inputeText} onChange={updateInpute} />
      <button onClick={handleAddTodoEvent}>add</button>
    </div>
  );
}

export default TodoGenerator;
