const ListTodos = ({todo,id,checkComplete}) => {
    return ( 
        <li>
            <label htmlFor={id} className={todo.complete ? "active":""} >
              <input type="checkbox" id={id}  checked={todo.complete} 
              onChange={() => checkComplete(id)} />
              {todo.name}
            </label>
            <button disabled={todo.complete} id="edit">Category</button>
          </li>
     );
}
 
export default ListTodos;