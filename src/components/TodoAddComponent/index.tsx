import React, { useState } from 'react'
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoAddContainer, TodoInputContainer } from '../HomeStyleComponents'

import { inject, observer } from 'mobx-react';
import { todoStorePropInterface } from '../TodoListShowComponent';

const TodoAddComponent:React.FC<todoStorePropInterface>=inject('todosStore')(observer(({todosStore})=>{

    const [todoInputValue, setTodoInputValue] = useState('');

    function handleClickOnAddBtn(){              
        todosStore?.addTodo(todoInputValue)
        setTodoInputValue('');
    }


    function todoInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setTodoInputValue(event.target.value);
    }
    
    function onInputKeyPress(event:any){
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
}))



export default TodoAddComponent