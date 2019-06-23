import { todoActionEnum, Action } from '../action/todoaction';
import { todoState, todoItem } from '../store/state';
import { todoActionPayload } from '../action/todoaction';
import { tassign } from 'tassign';

export function todoReducer(state: todoState, action: Action) {

    switch (action.type) {

        case todoActionEnum.addTodo: {
            return addTODO(state, action);

        }
        case todoActionEnum.removeTodo: {

            return removeTODO(state, action);
        }
        case todoActionEnum.toggleTodo: {
            return toggleTODO(state, action);
        }

        case todoActionEnum.clearTodos: {
            return clearTODO(state, action);

        }
        default: return state;
    }

    function addTODO(state, action) {
        let todo: todoItem = {
            id: state.todo.length + 1,
            title: action.payload.todoItem.title,
            isCompleted: action.payload.isCompleted


        }
        let todoItem = state.todo.concat(todo);
        return tassign(state, { todo: todoItem, lastUpdate: action.payload.lastUpdate })

    }
    function removeTODO(state, action) {
        let todoItem = state.todo.filter(x => x.id != action.payload.todoItem.id);
        return tassign(state, { todo: todoItem, lastUpdate: action.payload.lastUpdate })

    }
    function toggleTODO(state, action) {
        let todoItem = state.todo.filter(x => x.id != action.payload.todoItem.id);
        return tassign(state, { todo: todoItem.concat(action.payload.todoItem), lastUpdate: action.payload.lastUpdate })

    }
    function clearTODO(state, action) {

        return tassign(state, { todo: [], lastUpdate: action.payload.lastUpdate })

    }


}