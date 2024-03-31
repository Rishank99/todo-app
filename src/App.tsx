import './App.css';
import React,{useState} from 'react';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {

  const[showAddTodoForm,setShowAddTodoForm]=useState(false);

  const[todos,setTodos]=useState([
    {rowNumber:1, rowDescription:"Feed Puppy", rowAssigned:"User One"},
    {rowNumber:2, rowDescription:"Water Plants", rowAssigned:"User Two"},
    {rowNumber:3, rowDescription:"Make Dinner", rowAssigned:"User One"},
    {rowNumber:4, rowDescription:"Charge Phone Battery", rowAssigned:"User One"}
  ])

  const addTodo=(description :string,assigned :string)=>{
    let rowNumber=0;
    if(todos.length>0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
      const newTodo={
        rowNumber:todos.length+1,
        rowDescription:description,
        rowAssigned:assigned
      }
      setTodos(todos=> [...todos,newTodo]);
    
  }

  const deleteTodo=(deleteTodoRowNumber :number)=>{
    let filterd=todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filterd);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className="btn btn-primary" onClick={()=>setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm?'Close New Todo':'New Todo'}
          </button>
          {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
          }
          
        </div>
      </div>
    </div>
  );
}


