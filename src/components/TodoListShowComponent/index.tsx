import { useActor } from '@xstate/react';
import React, { useContext } from 'react'
import { localStorageKeyName } from '../../constants/localStorageKeyNames';
import HomeContext from '../../context/HomeRouteContext/homeRouteContext';
import { setItemInLocalStorage } from '../../utils/getAndSetLocalStorage';
import { HeadingBoldSpan, HomePageBtn, HomePageSubHeading, TodoListContainer ,TodoList,TodoItemBox,TodoCheckBox,TodoContextBox ,TodoItemDeleteIcon} from '../HomeStyleComponents'

const TodoListShowComponent:React.FC=()=>{

    const {todosMachine}=useContext(HomeContext)
    const [state,send]=useActor(todosMachine)
    
    const todosList=state.context.todosList;

    function handleCheckBoxInput(event:React.ChangeEvent<HTMLInputElement>) {
        send({
            type:'CLICK_ON_CHECKED_BOX',
            id:event.target.id,
            isChecked:event.target.checked
        })
    }

    function handleDeleteBtnPress(id:string) {
        send({
            type:'CLICK_ON_DELETE_TODO',
            id,
        })
    }

    function handleClickOnSaveBtn(){
        setItemInLocalStorage(localStorageKeyName.todosList,JSON.stringify(todosList));
    }

    function showFilterTodoList() {
        return <TodoList>
                {
                    todosList.map((item)=>{
                        return <React.Fragment key={item.id} >
                            <li>  
                                <TodoItemBox>
                                    <TodoCheckBox id={item.id} checked={item.isActive ? false : true} onChange={handleCheckBoxInput} className='check-Box' type="checkbox" />
                                    <TodoContextBox>
                                    <p style={{ textDecoration: item.isActive ? "none" : "line-through" }} > {item.title} </p>
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
}

export default TodoListShowComponent