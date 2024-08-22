import React, { Component, ChangeEvent, MouseEvent } from 'react';

type Task = {
  text: string,
  completed: boolean
};


type TodoProps = {
  onHomeClick: () => void
};

type ToDoState = {
  todoList: Map<string, Task> | undefined
};

export class ToDo extends Component<TodoProps, ToDoState> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {todoList: undefined}
  }

  componentDidMount = (): void => {
    this.initializePage();
  };

  render = (): JSX.Element => {
    return (
      <div id="ToDoPage">
        <div className="navBar">
          <button id="homeBtn" onClick={this.doHomeClick}>Home</button>
        </div>
        <div id="ToDoList">
          <h2>ToDo List</h2>
          <div id="ToDoActionBar">
            <button id="addToDoBtn" onClick={this.onAddToDoClick}>+</button>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  };

  renderItems = (): JSX.Element => {
    if (this.state.todoList === undefined ||
    this.state.todoList.size === 0) {
      return (
        <div id="toDoItems"></div>
      );
    } else {
      return (
        <div id="toDoItems">
        </div>
      );
    }
  };

  onAddToDoClick = (): void => {

  };

  initializePage = (): void => {
    const todoList: Map<string, Task> = new Map();
    this.setState({todoList: todoList});
  };

  doHomeClick = (_: MouseEvent<HTMLButtonElement>): void => {
    this.props.onHomeClick();
  };
}