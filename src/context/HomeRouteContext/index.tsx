import { useInterpret } from '@xstate/react'
import React from 'react'
import { TodosMachine } from '../../machine/todosMachine'
import HomeContext from './homeRouteContext'

interface HomeRouteContextPropsInterFace{
    children:React.ReactNode|React.ReactNode[]
}


const HomeRouteContext:React.FC<HomeRouteContextPropsInterFace>=(props)=>{
    
    const {children}=props

    const todosMachine=useInterpret(TodosMachine)

    return (
        <HomeContext.Provider value={{todosMachine}}>
            {children}
        </HomeContext.Provider>
    )
}
export default HomeRouteContext