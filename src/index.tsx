import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { todosStore } from './store'


const root=ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement 
)

root.render(
    <React.StrictMode>
        <Provider todosStore={todosStore} >
        <App/>
        </Provider>
    </React.StrictMode>
)