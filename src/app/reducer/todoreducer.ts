import { todoActionEnum, Action } from '../action/todoaction';
import { todoState } from '../store/state';
import { todoActionPayload } from '../action/todoaction';
import { tassign } from 'tassign';

export function todoReducer(state: todoState, action: Action) {

    switch (action.type) {

        case todoActionEnum.addTodo: {
            let todoItem = state.todo.concat(action.payload.todoItem);
            return tassign(state, { todo: todoItem, lastUpdate: action.payload.lastUpdate, isCompleted: action.payload.isCompleted })

        }
        case todoActionEnum.removeTodo: {

            let todoItem = state.todo.filter(x => x.id != action.payload.todoItem.id);
            return tassign(state, { todo: todoItem, lastUpdate: action.payload.lastUpdate })
        }
        case todoActionEnum.toggleTodo: {

            return tassign(state, { lastUpdate: action.payload.lastUpdate, isCompleted: !action.payload.isCompleted })
        }

        case todoActionEnum.clearTodos: {
            return tassign(state, { todo: [], lastUpdate: action.payload.lastUpdate })

        }
        default: return state;
    }


}