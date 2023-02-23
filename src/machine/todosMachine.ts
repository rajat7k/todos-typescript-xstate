import { assign, createMachine } from "xstate";
import { v4 as uuidv4} from "uuid";
import { getItemFromLocalStorage } from "../utils/getAndSetLocalStorage";
import { localStorageKeyName } from "../constants/localStorageKeyNames";

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

// type TodosTypeState =
//   | {
//       value: 'idle';
//       context: TodoContext;
//     }


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
                entry:[
                    'checkTodoInLocalStorage'
                ]
            }
        },
        on:{
            ADD_TODO:{
                actions:['addTodoInTodoList']
            },
            CLICK_ON_CHECKED_BOX:{
                actions:['handleClickOnCheckedBox']
            },
            CLICK_ON_DELETE_TODO:{
                actions:['handleClickOnDeleteBtn']
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
            }),
            handleClickOnCheckedBox:assign({
                todosList:(context,event)=>{
                    const newTodoList:todoListItem[]=context.todosList;
                    const id:string=event.id;
                    const isChecked:boolean=event.isChecked;
                    const todoIndex = newTodoList.findIndex((obj => obj.id === id));
                    newTodoList[todoIndex].isActive = !isChecked;
                   return newTodoList
                }
            }),
            handleClickOnDeleteBtn:assign({
               
                todosList:(context,event)=>{
                    const id:string=event.id;
                    const newTodoList:todoListItem[] = context.todosList.filter(obj => obj.id !== id);
                    return newTodoList;
                }
                
            }),
            checkTodoInLocalStorage:assign({
                todosList:(context,event)=>{
                    const todoValueFromLocalStorage:string=getItemFromLocalStorage(localStorageKeyName.todosList);
                    let newTodoList:todoListItem[]=[];
                    if(todoValueFromLocalStorage!==""){
                        newTodoList=JSON.parse(todoValueFromLocalStorage);
                    }
                    return newTodoList
                }
            })
        }
    }
)