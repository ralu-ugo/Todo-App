import { useState } from 'react'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

const App = () => { 
    const [mode, setMode] = useState('dark')

    const [todos, setTodos] = useState([
        {id: 0, value: 'Buy Milk', active: false, completed: false},
        {id: 1, value: 'Master javascript', active: false, completed: false},
        {id: 2, value: 'Make more money', active: false, completed: false},
    ])

    const [filterBy, setFilterBy] = useState('all')

    

    function toggleMode () {
        if (mode === 'dark') {
            setMode('light')
        } else {
            setMode('dark')
        }
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    const addTodo = (evt, currentTodo, setCurrentTodo) => {
        if (currentTodo.trim() === ''){
            return false
        }
        if (evt.key === 'Enter') {
            let todo =  {
                id: todos.length,
                value: currentTodo,
                active: false,
                completed: false
            }

            setTodos([...todos, todo])
            setCurrentTodo('')
        }

    }

    const markAsActive =  (id) => {
        let newList = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, active: !todo.active}
            } else {
                return todo
            }
        })

        setTodos(newList)
    }

    const markAsCompleted = (id) => {
        let newList = todos.map(todo => {
            if (todo.id === id) {
                return{...todo, completed: !todo.completed}
            } else {
                return todo
            }
        })
        setTodos(newList)
    }

    const filterTodos = (todos, filter) => {
        let filteredList = todos.filter(todo => {
            if (filter === 'active') {
                return todo.active 
            } else if (filter === 'completed') {
                return todo.completed
            } else {
                return todo.value
            }
        })

        return filteredList 
    }

    const completedCount = () => {
        let count = todos.length; 

        todos.forEach(todo => {
            if (todo.completed) {
                count -= 1
            }
        })
        return count
    }

    const clearCompleted = () => {
        let filteredList = todos.filter(todo => todo.completed !== true)
        setTodos(filteredList)
    }


    return (
        <div className= {`App ${mode}`}>
            <header></header>
            <main>
                <div className="top">
                    <h1>TODO</h1>
                    <button className= 'mode-btn' onClick= {toggleMode}>
                       {mode === 'dark' && <img src={sunIcon} alt="" />}
                       {mode === 'light' && <img src={moonIcon} alt="" />}
                    </button>
                </div>
                <TodoInput addTodo= {addTodo}/>
                <div className="todo-list">
                    {
                        todos.length ? (
                            filterTodos(todos, filterBy).map(todo => {
                                return (
                                    <TodoItem 
                                    key = {todo.id}
                                    todo={todo}
                                    markAsActive={markAsActive}
                                    markAsCompleted={markAsCompleted}/>
                                )
                            })
                        ) : (
                            <div className="no-todos">
                                <h3>You have nothing to do!</h3>
                                <p>Add a todo item using the form above</p>
                            </div>
                        )
                        
                     }

                     <nav>
                         <span>{completedCount()} items left</span>

                         <ul>
                             <li onClick={() => setFilterBy('all')}>All</li>
                             <li onClick={() => setFilterBy('active')}>Active</li>
                             <li onClick={() => setFilterBy('all')}>Completed</li>
                         </ul>

                         <button onClick={clearCompleted}>Clear Completed</button>
                     </nav>
                </div>
            </main>
            
        </div>
    )
}

export default App
