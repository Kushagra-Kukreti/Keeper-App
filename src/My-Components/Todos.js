import React from 'react'
import Todo from './todo'
const Todos = ({todos,onDelete,clearAll}) => {
  return (
    <div id="todos container" className='container col-6'>
      <span className='col'>
        {
          todos.map((todo) => {
            return <Todo todo={todo} key={todo.number} onDelete={onDelete} />
          })
        }
      </span>
      {
        (todos.length>1)?
        <div class="row d-flex justify-content-center">
  
                <label ><div className='ml-0 mt-4'>
                <button type="button" className="btn bg-warning btn-sm" onClick={clearAll}>clear all</button>
                </div></label>
            </div>
        :
        ""
      }
    </div>
  )
}

export default Todos
