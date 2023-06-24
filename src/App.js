import './App.css';
import Todos from './My-Components/Todos'
import React, { useState, useEffect } from 'react';
import AddToDo from './My-Components/AddToDo'
import Header from './My-Components/header';


function App() {

  //curr state uthaayi local storage se ki kitne todos hai 
  let curr;
  if (localStorage.getItem("todos") === null) { //agr nahi h kuch bhi 
    curr = []; // to empty array jisme koi object nahi
  }
  else {
    curr = JSON.parse(localStorage.getItem("todos")); //STRING KE FORM ME HOGA USSE JS OBJECT BNAARE
  }



  const onDelete = (todo) => {


    //setTodos se todos array change hoga -->aur filter mtlb ek specific property waale
    // ye hatt jayenge
    setTodos(todos.filter((e) => {
      return e !== todo
    }))

    // updated todos array set krre local storage me 
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title) => {
    let number;
    if (todos.length === 0) {
      number = 1;
    }
    else
      number = todos[todos.length - 1].number + 1;

    const myTodo = {
      number: number,
      title: title,
    }
    setTodos([...todos, myTodo])

    //update hone yaani add hone ke baad local storage me set krre
    localStorage.setItem("todos", JSON.stringify(todos));
  }

    // curr state me jo bhi h usse usse kre 
  // todos mtlb intially kya hai 
  // settodos mtlb kya hogya
  const [todos, setTodos] = useState(curr)

  const clearAll =()=>{
    setTodos([])
  }

  useEffect(() => {
    // ye pehle local storage me set krdega item phir refresh krne par bhi saare store ho chuke honge iske run hone me delay nahi hoga vrna agr isse use nahi krenge to aadhe set honge aur beech me refresh hogya to aadhe local storage me set nahi ho payenge
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])




  return (
    <>
      <Header/>
      <AddToDo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} clearAll={clearAll} />
    </>
  );
}

export default App;
