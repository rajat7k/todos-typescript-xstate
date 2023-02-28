
import { observable, action } from 'mobx';
import { localStorageKeyName } from '../constants/localStorageKeyNames';
import { getItemFromLocalStorage } from '../utils/getAndSetLocalStorage';
import { TodoModel } from './model/todo';



class TodosMobxStore {

    @observable todos: Array<TodoModel> = []

    constructor() {
        const todoValueFromLocalStorage: string = getItemFromLocalStorage(localStorageKeyName.todosList);
        if (todoValueFromLocalStorage !== "") {
            this.todos = JSON.parse(todoValueFromLocalStorage);
        }
    }

    @action
    addTodo(todoText: string) {
        const newTodo = new TodoModel(todoText);
        this.todos = [...this.todos, newTodo];
    }

    @action
    toggleTodoById(todoId: string) {
        const index = this.todos.findIndex(obj => obj.id === todoId)
        this.todos[index].toggleIsActive()
    }

    @action
    deleteTodoById(todoId: string) {
        this.todos = this.todos.filter(obj => obj.id !== todoId);
    }
}

export default TodosMobxStore