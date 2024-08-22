import React, { Component } from 'react';
import './css/home.css';

type HomeProps = {
  onTodoClick: () => void,
  onDiagramClick: () => void
};

export class Home extends Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  };

  render = (): JSX.Element => {
    return (
      <div id="home-page">
        <button onClick={() => {this.props.onTodoClick()}}>Todo</button>
        <button onClick={() => {this.props.onDiagramClick()}}>Diagram</button>
      </div>
    );
  }
}
