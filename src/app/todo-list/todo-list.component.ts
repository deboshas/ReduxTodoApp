import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { todoState } from '../store/state';
import { Action } from "../action/todoaction";
import { todoActionEnum } from "../action/todoaction";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<todoState>) {

  }

  addTodo(input) {
    if (!input.value) return;

    this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  }
}
