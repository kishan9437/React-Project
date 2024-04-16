import './App.css';
import React, { useState } from "react"
import ToDoLists from './ToDoLists';

const App = () => {
  const [inputList,setInputList]=useState("")
  const [items,setItems]=useState([])

  const itemEvent = (e) => {
    setInputList(e.target.value)
  }

  const listOfItems = ()=>{
    setItems((oldItem)=>{
      return [...oldItem,inputList]
    })
    setInputList('');
  }

  const deleteItems=(id)=>{
    console.log("delete")

    setItems((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }
  
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type='text' placeholder='Add a Items' value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
           {/* <li> {inputList} </li>*/}
           {
            items.map((itemval,index)=>{
              return <ToDoLists 
                      key={index}  
                      id={index} 
                      text={itemval} 
                      onSelect={deleteItems}
                      />;
            })
           }
          </ol>
        </div> 
      </div>
    </>
  );
}

export default App;
