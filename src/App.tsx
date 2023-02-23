import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeRoute from './routes/HomeRoute'

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomeRoute/> } />
        </Routes>

        </BrowserRouter>
    )
}
export default App
