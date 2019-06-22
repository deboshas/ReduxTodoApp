import { todoState, todoItem } from '../store/state';

export enum todoActionEnum {
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodos


}

export interface todoActionPayload {

    todoItem?: todoItem,
    lastUpdate?: string,
    isCompleted?: boolean

}

export interface Action {
    type: todoActionEnum,
    payload: todoActionPayload

}