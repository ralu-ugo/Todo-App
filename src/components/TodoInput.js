import { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [currentTodo, setCurrentTodo] = useState('')

    return (
        <div className="todo-input">
                    <input 
                    type="text" 
                    placeholder= "Create a new todo" 
                    value= {currentTodo} 
                    onChange={(e) => setCurrentTodo(e.target.value)} 
                    onKeyPress={(e) => 
                    addTodo(e, currentTodo, setCurrentTodo)} />
                </div>
    )
}

export default TodoInput
