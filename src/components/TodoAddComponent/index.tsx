import React, { useContext, useState } from 'react'
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoAddContainer, TodoInputContainer } from '../HomeStyleComponents'
import HomeContext from '../../context/HomeRouteContext/homeRouteContext';
import { useActor } from '@xstate/react';

const TodoAddComponent:React.FC=()=>{

    const [todoInputValue, setTodoInputValue] = useState('');
    const {todosMachine}=useContext(HomeContext)

    const [,send]=useActor(todosMachine)


    function handleClickOnAddBtn(){
        send({
            type:'ADD_TODO',
            title:todoInputValue,
        })
        setTodoInputValue('');
    }


    function todoInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setTodoInputValue(event.target.value);
    }
    
    function onInputKeyPress(event:any){
        console.log(typeof event.key)
        if(event.key==='Enter' && event.target.value!==''){
            handleClickOnAddBtn()
        }
    }

    return (
        <TodoAddContainer>
            <HomePageSubHeading> <HeadingBoldSpan>Create</HeadingBoldSpan> Task </HomePageSubHeading>
            <TodoInputContainer onChange={todoInputChange} value={todoInputValue} onKeyPress={onInputKeyPress}  type='text' placeholder='What needs to be done..?' />
            <HomePageBtn onClick={handleClickOnAddBtn} disabled={todoInputValue === '' ? true : false}  >Add</HomePageBtn>
        </TodoAddContainer>
    )
}

export default TodoAddComponent