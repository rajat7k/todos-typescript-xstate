
import { inject, observer } from 'mobx-react';
import React from 'react'
import { localStorageKeyName } from '../../constants/localStorageKeyNames';
import TodosMobxStore from '../../store/todosStore';
import { setItemInLocalStorage } from '../../utils/getAndSetLocalStorage';
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoListContainer ,TodoList,TodoItemBox,TodoCheckBox,TodoContextBox ,TodoItemDeleteIcon} from '../HomeStyleComponents'


export interface todoStorePropInterface{
    todosStore?:TodosMobxStore
}

const TodoListShowComponent:React.FC<todoStorePropInterface>=inject('todosStore')(observer(({todosStore})=>{



    console.log(todosStore)

    function handleDeleteBtnPress(id:string) {

        todosStore?.deleteTodoById(id)
    }

    function handleClickOnSaveBtn(){
        setItemInLocalStorage(localStorageKeyName.todosList,JSON.stringify(todosStore?.todos));
    }

    function showFilterTodoList() {
        return <TodoList>
                {
                    todosStore?.todos.map((item)=>{
                        return <React.Fragment key={item.id} >
                            <li>  
                                <TodoItemBox>
                                    <TodoCheckBox id={item.id} checked={item.isActive} onChange={item.toggleIsActive} className='check-Box' type="checkbox" />
                                    <TodoContextBox>
                                    <p style={{ textDecoration: !item.isActive ? "none" : "line-through" }} > {item.title} </p>
                                    <TodoItemDeleteIcon className="far fa-trash-alt delete-icon" onClick={()=>handleDeleteBtnPress(item.id)} ></TodoItemDeleteIcon>
                                    </TodoContextBox>
                                </TodoItemBox>    
                            </li>
                        </React.Fragment>
                    })
                }
        </TodoList>
    }

    return (
        <TodoListContainer>
            <HomePageSubHeading> <HeadingBoldSpan>My</HeadingBoldSpan> Tasks </HomePageSubHeading>
           
           <div>
           {showFilterTodoList()}
           </div>

            <HomePageBtn onClick={handleClickOnSaveBtn} >Save</HomePageBtn>

        </TodoListContainer>
    )
}))

export default TodoListShowComponent