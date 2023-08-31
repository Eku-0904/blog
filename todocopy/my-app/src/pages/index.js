import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
const Task = ({ task, index, onCheck, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const handleEditButtonClick = () => {
    setIsEditing(true);
  };
  const handleEditInputChange = (event) => {
    setEditedText(event.target.value);
  };
  const handleEditSubmit = () => {
    onEdit(index, editedText);
    setIsEditing(false);
  };
  const handleCheckClick = () => {
    if (!task.checked) {
      onCheck(index);
    }
  };

  return (
    <li className={styles.taskItem}>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={handleCheckClick}
        className={styles.checkbox}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleEditInputChange}
          className={styles.editInput}
        />
      ) : (
        <span className={task.checked ? styles.checkedText : styles.text}>
          {task.text}
        </span>
      )}
      <button
        onClick={isEditing ? handleEditSubmit : handleEditButtonClick}
        className={isEditing ? styles.saveButton : styles.editButton}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(index)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { text: inputTask, checked: false }]);
      setInputTask('');
    }
  };
  const handleCheckTask = (index) => {
    const updatedTasks = [...tasks];
    if (!updatedTasks[index].checked) {
      updatedTasks[index].checked = true;
    }
    setTasks(updatedTasks);
  };
  const handleEditTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const countUncheckedTasks = () => {
    return tasks.filter(task => !task.checked).length;
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.addButton}>
          Add
        </button>
      </div>
      <div className={styles.taskCounter}>
        Tasks left: {countUncheckedTasks()}
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            onCheck={handleCheckTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;