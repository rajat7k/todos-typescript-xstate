import React, { useContext, useState } from 'react'
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoAddContainer, TodoInputContainer } from '../HomeStyleComponents'
import HomeContext from '../../context/HomeRouteContext/homeRouteContext';

const TodoAddComponent:React.FC=()=>{

    const [todoInputValue, setTodoInputValue] = useState('');
    const {todosMachine}=useContext(HomeContext)

    function handleClickOnAddBtn(){
        
    }
    function todoInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setTodoInputValue(event.target.value);
    }
    

    return (
        <TodoAddContainer>
            <HomePageSubHeading> <HeadingBoldSpan>Create</HeadingBoldSpan> Task </HomePageSubHeading>
            <TodoInputContainer onChange={todoInputChange} value={todoInputValue}   type='text' placeholder='What needs to be done..?' />
            <HomePageBtn onClick={handleClickOnAddBtn} >Add</HomePageBtn>
        </TodoAddContainer>
    )
}

export default TodoAddComponent