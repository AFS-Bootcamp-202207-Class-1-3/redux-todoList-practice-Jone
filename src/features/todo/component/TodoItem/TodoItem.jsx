import { useState } from "react";
import { Modal } from 'antd';
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus, updateTodoContext } from "../../../api/todoApi";
import { onDelete, onToggle, updateContext } from "../../todoSlice";
import "./TodoItem.css";
function TodoItem(props) {
  const { todo } = props;
  const [inputeText, setInputeText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    toggleTodoStatus(todo.id, { done: !todo.done }).then((response) => {
      dispatch(onToggle(response.data.id));
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id).then(() => {
      dispatch(onDelete(todo.id));
    });
  };

  const handleEdit = () => {
    setIsModalVisible(true);
    setInputeText(todo.context);
  }

  const handleOk = () => {
    if (inputeText === "") {
      alert("输入的字符串不能为空！");
      return;
    }
    updateTodoContext(todo.id, { context: inputeText }).then((response) => {
      dispatch(updateContext(response.data));
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateInput = (event) => {
    setInputeText(event.target.value);
  }
  return (
    <div className="box">
      <input
        className={todo.done ? "done" : ""}
        value={todo.context}
        onClick={handleClick}
        readOnly
      />
      <button className="delete-btn" onClick={handleDelete}>
        delete
      </button>
      <button className="edit-btn" onClick={handleEdit}>
        edit
      </button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" value={inputeText} onChange={updateInput} />
      </Modal>
    </div>
  );
}

export default TodoItem;
