import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { todoState, todoItem } from '../store/state';
import { Action } from "../action/todoaction";
import { todoActionEnum } from "../action/todoaction";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  @select((s: todoState) => s.todo) todos: todoItem[];
  constructor(private ngRedux: NgRedux<todoState>) {

  }

  addTodo(input) {
    if (!input.value) return;
    let payload = {
      title: input.value,
      isCompleted: false

    }
    this.ngRedux.dispatch({ type: todoActionEnum.addTodo, payload: { todoItem: payload, lastUpdate: new Date() } });

    input.value = '';
  }

  toggleTodo(todo: todoItem) {

    todo.isCompleted = !todo.isCompleted;
    this.ngRedux.dispatch({ type: todoActionEnum.toggleTodo, payload: { todoItem: todo, lastUpdate: new Date() } });

  }

  removeTodo(todo: todoItem) {
    this.ngRedux.dispatch({ type: todoActionEnum.removeTodo, payload: { todoItem: todo, lastUpdate: new Date() } });
  }
}
