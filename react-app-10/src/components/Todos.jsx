import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"


function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className="align-right justify-center gap-3">
            <button
             onClick={() => dispatch(updateTodo(todo.id))}
              className="text-white bg-yellow-500 m-2 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Edit
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id, todo.text))}
              className="text-white bg-red-500 m-2 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
            </div>
            
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos