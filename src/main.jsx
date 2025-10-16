import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './Count.jsx'
import { TodoProvider } from './context/Todocontext.jsx'
import { TodoContext } from './context/Todocontext.jsx'
import Shared1 from './Shared1.jsx'
import Shared2 from './Shared2.jsx'
import GetTodo from './GetTodos.jsx'

createRoot(document.getElementById('root')).render(

  
    <TodoProvider>
      <Shared1/>
      <Shared2/>
      <GetTodo/>
    </TodoProvider>

  
)
