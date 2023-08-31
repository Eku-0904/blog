import { useState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { TextInput } from "@/components/TextInput";
import { Todo } from "@/components/Todo";
export default function Home() {
  const [toDoList, setToDoList] = useState([
    { id: 1, task: "My Task 1", isDone: true },
    { id: 2, task: "My Task 2", isDone: false },
    { id: 3, task: "My Task 3", isDone: true },
    { id: 4, task: "My Task 4", isDone: false },
  ]);
  function handleSubmit() {
    console.log("ok");
  }
  function handleInputChange(utga) {
    if (utga.key === "Enter") {
    }
  }
  function removeOne(id) {
    // Id ashiglaj ustah uildel
    const newTodoList = toDoList.filter((element) => element.id !== id);
    setToDoList(newTodoList);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>My To Do List</h1>
        <div className="count">
          {" "}
          {toDoList.filter((element) => element.isDone === true).length} /{" "}
          {toDoList.length}
        </div>
      </div>
      
      {toDoList.map((element) => (
        <Todo
          task={element.task}
          id={element.id}
          isCompleted={element.isDone}
          deleteOne={removeOne}
        />
      ))}
      <TextInput handle={handleInputChange} />
      <SubmitButton handle={handleSubmit} />
    </div>
  );
}