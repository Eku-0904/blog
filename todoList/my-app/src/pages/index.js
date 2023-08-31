import { SubmitButton } from "@/components/SubmitButton";
import { TextInput } from "@/components/TextInput";
import { Todo } from "@/components/Todo"
import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState([])
  console.log(todoList)
  function handleSubmit(utga) {
    console.log(utga.target.value)
    let newTodolist = [...todoList, {id:Math.floor(Math.random()*1000), task:utga.target.value, isDone:false}];
    setTodoList(newTodolist);
    utga.target.value =""
  }
  function handleInputChange(utga) {
    if(utga.key === "Enter"){

      console.log(utga.target.value)
      let newTodolist = [...todoList, {id:Math.floor(Math.random()*1000), task:utga.target.value, isDone:false}];
      setTodoList(newTodolist);
      utga.target.value =""
    }
  }
  
  function handleDelete(text){
    console.log(todoList)
    const newTodo = todoList.filter((element)=>element.id !== text)
    console.log(newTodo)
    setTodoList(newTodo)
  }
  return (
    <div className="bigContainer">
    <div className="container">
      <div className="sambar">ToDo list</div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        margin:"auto"
      }}>
      {todoList.map((element) =>(
      <Todo onDelete={handleDelete} text={element.task} handle={handleSubmit} id={element.id} />

      ))}
      </div>
      <TextInput handle={handleInputChange} />
      <SubmitButton handle={handleSubmit} />
    </div>
    </div>
  );
}