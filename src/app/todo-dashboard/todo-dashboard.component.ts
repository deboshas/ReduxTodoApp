import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { todoState } from '../store/state';
import { Action } from "../action/todoaction";
import { todoActionEnum } from "../action/todoaction";
@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  //todos: number;
  //lastUpdate;
  @select((s: todoState) => s.todo) todo: any[];
  @select((s: todoState) => s.lastUpdate) lastUpdate;

  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<todoState>) {
    //this.todos = this.todo.length;

    // service.todoAdded.subscribe(() => {
    //   this.todos++;
    //   this.lastUpdate = new Date();
    // });

    // service.todoRemoved.subscribe(() => {
    //   this.todos--;
    //   this.lastUpdate = new Date();
    // });

    // service.todoToggled.subscribe(() => {
    //   this.lastUpdate = new Date();
    // });

    // service.todosCleared.subscribe(() => {
    //   this.todos = 0;
    //   this.lastUpdate = new Date();
    // });
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: todoActionEnum.clearTodos, payload: { lastUpdate: new Date() } });
  }
}
