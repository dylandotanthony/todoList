import './App.css';
import React, { useState} from 'react';
import Header from './components/header'


function App() {
  const [newToDo , SetNewToDo] = useState("");
  const [toDos , setToDos] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(newToDo);
    if (newToDo.length === 0){
      return;
    }
    const todoItem = {
      text: newToDo,
      complete: false
    }
    setToDos([...toDos, todoItem])
    SetNewToDo("");
    }

const handleDelete = (delIdx) => {
    const filteredTodos = toDos.filter((todo,i)=> {
      return i !== delIdx;
    });
    setToDos(filteredTodos);
};

const handletogglecomplete = (idx) => {
  const updataedTodos = toDos.map((todo,i) => {
    if (idx === i){
      todo.complete = !todo.complete
    }
    return todo
  });
  setToDos(updataedTodos);
}
  return (
    <div className="App">
      < Header />
      <form onSubmit={(event) => {
                onSubmitHandler(event);
              }}>

            <input 
            onChange={(event) => {
              SetNewToDo(event.target.value);
            }}
            type="text" 
            value ={newToDo}
            />
            <div>
            <br />
            <button type="submit"> Add</button>
            </div>
    
        </form>
<br />
        {toDos.map((todo,i) => {
          const todoClasses = [];
          if (todo.complete){
            todoClasses.push("line-through");
          }
          return (
            <div key={i}>
              <input type="checkbox" 
              onChange={(event) => {
                handletogglecomplete(i);
              }}
              checked={todo.complete}
              />
              
              <span style={{marginLeft:"10px"}} className={todoClasses.join(" ")}>{todo.text}</span>
              <button 
              onClick={(event) => {
                handleDelete(i);
              }}
              style={{marginLeft:"10px"}}>
                Delete
                </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
