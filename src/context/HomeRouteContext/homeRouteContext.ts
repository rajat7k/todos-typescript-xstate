import {createContext} from 'react';


interface HomeContextInterface{
    
}

const HomeContext=createContext<HomeContextInterface|null>(null);

export default HomeContext