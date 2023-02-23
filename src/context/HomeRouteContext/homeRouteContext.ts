import {createContext} from 'react';
import {  InterpreterFrom } from 'xstate';
import { TodosMachine } from '../../machine/todosMachine';


interface HomeContextInterface{
    todosMachine:InterpreterFrom< typeof TodosMachine >
}

const HomeContext=createContext<HomeContextInterface>({todosMachine:{} as InterpreterFrom< typeof TodosMachine > });

export default HomeContext