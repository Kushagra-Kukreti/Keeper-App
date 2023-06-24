import React from 'react'

const todo = ({ todo, onDelete }) => {
  return (

  

      <span class="card mb-2 border border-warning rounded-lg">
        <span class="card-body">
          {todo.title}
          <p className='float-right'><button type="button" className="btn btn-sm" onClick={() => { onDelete(todo) }} >


            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x p-0" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>

          </button></p>
        </span>
      </span>
   

  )
}

export default todo
