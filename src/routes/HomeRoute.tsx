
import React from 'react'
import { HomePageHeading, HomePageMainContainer } from '../components/HomeStyleComponents'
import TodoAddComponent from '../components/TodoAddComponent'
import TodoListShowComponent from '../components/TodoListShowComponent'
import HomeRouteContext from '../context/HomeRouteContext'

const HomeRoute:React.FC=()=>{
    return (
       <HomeRouteContext>
        <HomePageMainContainer>
            <HomePageHeading> Todos</HomePageHeading>
            <TodoAddComponent/>
            <TodoListShowComponent/>
        </HomePageMainContainer>
       </HomeRouteContext>
    )
}

export default HomeRoute