import React,{useContext} from "react";
import ListTodos from "./ListTodos";
import {DataContext} from './DataProvider';


const TodoList = () => {
   const [todos,setTodos] = useContext(DataContext);

  const switchComplete = id =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index) =>{
       if(index === id){
         todo.complete = !todo.complete
       }
    }) 
    setTodos(newTodos)
  }

    return ( 
        <ul>
           {
             todos.map((todo,index) => (
               <ListTodos todo={todo} key={index} id={index} 
               checkComplete={switchComplete} />
             ))
           }
        </ul>
     );
}
 
export default TodoList;