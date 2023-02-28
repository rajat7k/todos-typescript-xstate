import { v4 as uuidv4 } from 'uuid';
import { observable, action } from 'mobx';

export class TodoModel{
    id:string=uuidv4();
    title:string="";
    @observable isActive:boolean=false;
    constructor(title:string){
        this.title=title;
        this.id=uuidv4()
    }

    @action.bound
    toggleIsActive(){
        this.isActive=!this.isActive
        console.log('came isActive',this.isActive)
    }
}