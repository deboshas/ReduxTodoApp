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
  @select((s: todoState) => s.todo) todos;
  constructor(private ngRedux: NgRedux<todoState>) {

  }

  addTodo(input) {
    if (!input.value) return;


    this.ngRedux.dispatch({ type: todoActionEnum.addTodo, payload: { todoItem: input.value, lastUpdate: new Date() } });

    //this.ngRedux.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo: todoItem) {
    this.ngRedux.dispatch({ type: todoActionEnum.toggleTodo, payload: { lastUpdate: new Date(), isCompleted: todo.isCompleted } });

  }

  removeTodo(todo: todoItem) {
    this.ngRedux.dispatch({ type: todoActionEnum.removeTodo, payload: { todoItem: todo, lastUpdate: new Date() } });
  }
}
