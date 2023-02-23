import { assign, createMachine } from "xstate";
import { v4 as uuidv4} from "uuid";

interface todo{
    title:string,
    isActive:boolean,
}

interface todoListItem  extends todo {
    id:string,
}

interface TodoContext{
    todosList: todoListItem[]
}

function createTodo(title:string):todoListItem{
    const id:string =uuidv4();
    return {
        id,
        title,
        isActive:true,
    }
}


export const TodosMachine=createMachine<TodoContext>(
    {
        id:'TodosMachine',
        initial:'idle',
        context:{
            todosList:[],
        },
        states:{
            idle:{

            }
        },
        on:{
            ADD_TODO:{
                actions:['addTodoInTodoList']
            }
        }
    },
    {
        actions:{
            addTodoInTodoList:assign({
                todosList:(context,event)=>{
                    const title:string=event.title
                    const todo:todoListItem=createTodo(title);
                    const newTodoList:todoListItem[]=[todo,...context.todosList]
                    return newTodoList
                }
            })
        }
    }
)