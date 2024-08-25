import React, { Component, MouseEvent } from 'react';
import TodoList from './components/TdoList';
import './css/todo.css';

type TodoProps = {
  onHomeClick: () => void
};


export class ToDo extends Component<TodoProps, {}> {
  constructor(props: TodoProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return (
      <div id="todo-page">
        <div className="nav-bar">
          <button id="home-btn" onClick={this.doHomeClick}>Home</button>
        </div>
        <TodoList/>
        {/* <div id="ToDoList">
          <h2>ToDo List</h2>
          <div id="ToDoActionBar">
            <button id="addToDoBtn" onClick={this.onAddToDoClick}>+</button>
          </div>
          {this.renderItems()}
        </div> */}
      </div>
    );
  };

  // renderItems = (): JSX.Element => {
  //   if (this.state.todoList === undefined ||
  //   this.state.todoList.size === 0) {
  //     return (
  //       <div id="toDoItems"></div>
  //     );
  //   } else {
  //     return (
  //       <div id="toDoItems">
  //       </div>
  //     );
  //   }
  // };

  // onAddToDoClick = (): void => {

  // };

  // initializePage = (): void => {
  //   const todoList: Map<string, Task> = new Map();
  //   this.setState({todoList: todoList});
  // };

  doHomeClick = (_: MouseEvent<HTMLButtonElement>): void => {
    this.props.onHomeClick();
  };
}