import React, {useState, useContext} from "react";
import DataProvider, { DataContext } from "./DataProvider";

const FormInput = () => {
   const [todos,setTodos] = useContext(DataContext);
   const [todoName, setTodoName] = useState('');
   
const addTodo = e =>{
     e.preventDefault();
     setTodos([...todos,{name: todoName, complete:false}])
     setTodoName(''); 
   
   }



    return ( 
        <div className="Add">
          <form autoComplete="off" onSubmit={addTodo}>
            <p>
              Add Task: <input type="text" name="todos" id="todos" 
              required placeholder="Your Todo" value={todoName} 
              onChange={e => setTodoName(e.target.value.toLowerCase())} />
            </p>
             <div >
             <input type="radio" name="cate" value="Imp" id="Imp" defaultChecked />Important
              <input type="radio" name="cate" value="Nimp" id="Nimp"/>Not Important
              <input type="radio" name="cate" value="Urg" id="Urg"/>Urgent
              <input type="radio" name="cate" value="Nurg" id="Nurg"/>Not urgent
             </div>   
            
            <p>
              <button type="submit" id="submit">Add</button>
            </p>
          </form>
        </div>
     );
}
 
export default FormInput;