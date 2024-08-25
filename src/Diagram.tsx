import React, { Component } from 'react';
import './css/diagram.css';

type DiagramProps = {
  onHomeClick: () => void
};

export class Diagram extends Component<DiagramProps, {}> {
  constructor(props: DiagramProps) {
    super(props)
  };

  render = (): JSX.Element => {
    return (
      <div id="diagram-page">
        <div className="nav-bar">
          <button id="home-btn" onClick={() => {this.props.onHomeClick()}}>Home</button>
        </div>
      </div>
    );
  }
}