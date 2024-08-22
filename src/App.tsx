import React, { Component } from "react";
import './index.css';
import { ToDo } from './Todo';


type Page = "todo" | "home" | "diagram";

type AppState = {
  page: Page
};

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {page: "home"};
  }

  render = (): JSX.Element => {
    if (this.state.page === "todo") {
      return <ToDo onHomeClick={this.doHomeClick}/>
    } else if (this.state.page === "home") {
      return <Home onToDoClick={this.doTodoClick}
                   onDiagramClick={this.doDiagramClick}/>
    } else { // state = diagram
      return <Diagram onHomeClick={this.doHomeClick}/>
    }
  };



  doDiagramClick = (): void => {
    this.setState({page: "diagram"});
  };

  doTodoClick = (): void => {
    this.setState({page: "todo"});
  };

  doHomeClick = (): void => {
    this.setState({page: "home"});
  };
}
