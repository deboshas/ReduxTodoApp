import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { todoState, todoInitializeState } from './store/state';
import { todoReducer } from './reducer/todoreducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [TodoService, DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<todoState>, devTools: DevToolsExtension) {

    let enhancer = isDevMode() ? [devTools.enhancer()] : [];
    this.ngRedux.configureStore(todoReducer, todoInitializeState, [], enhancer);

  }
}
