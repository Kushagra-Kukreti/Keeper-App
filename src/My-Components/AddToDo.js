import React from 'react'
import { useState } from 'react'

export default function AddToDo({ addTodo }) {
    const [title, setTitle] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Fill every section");
        }
        else {
            addTodo(title);
            setTitle("");
        }
    }
    return (
        <div className='mt-5'>
            <div class="form-group row d-flex justify-content-center">
                <div class="col-sm-5">
                    <input placeholder="Take a note..." value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control p-3 rounded-lg shadow p-3 mb-5 bg-white rounded" id="title" />
                </div>
                <label ><div className='ml-0'>
                    <button type="submit" className="btn btn-warning " onClick={submit}>+</button>
                </div></label>
            </div>
        </div>
    )
}
