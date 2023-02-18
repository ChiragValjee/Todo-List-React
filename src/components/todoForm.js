import {useState, useRef, useEffect} from "react";
import React from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("")
    }

    const handleChange = e => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Add a todo item here"
                    className="todo-input"
                    name="input"
                    onChange={handleChange}
                    ref={inputRef}
                />

                <button type="button" className="todo-button" onClick={handleSubmit}>Add item</button>


            </form>

        </div>
    )
}

export default TodoForm