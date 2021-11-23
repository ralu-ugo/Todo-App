import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// function App () {
//     return (
//         <div className= 'App'>
//             <h1>This is my App</h1>
//             <p>Just Observing... </p>
//         </div>
//     )
// }

ReactDOM.render(
    <App name = 'Tobi' age = '121' nationality= 'Nigerian' />,
    document.querySelector('#root')
)

