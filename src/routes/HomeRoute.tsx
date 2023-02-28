import React from 'react'
import { HomePageHeading, HomePageMainContainer } from '../components/HomeStyleComponents'
import TodoAddComponent from '../components/TodoAddComponent'
import TodoListShowComponent from '../components/TodoListShowComponent'

const HomeRoute:React.FC=()=>{
    return (
       
        <HomePageMainContainer>
            <HomePageHeading> Todos</HomePageHeading>
            <TodoAddComponent/>
            <TodoListShowComponent/>
        </HomePageMainContainer>

    )
}

export default HomeRoute