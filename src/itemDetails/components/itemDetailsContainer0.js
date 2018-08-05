import React, { Component } from 'react';
import { ItemDetails } from './itemDetails';

export class ItemDetailsContainer extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.collapseButton = React.createRef();
    this.contents = React.createRef();
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      message: 'See Item Details +'
    };
  }
  toggleCollapse() {
    let details = this.contents.current;
    let message = '';
    if (details.style.display === 'block') {
      details.style.display = 'none';
      message = 'See Item Details +';
    } else {
      details.style.display = 'block';
      message = 'Hide item Details -';
    }
    this.setState({ message: message });
  }

  render() {
    return (
      <div>
        <p
          className="collapsible"
          ref={this.collapseButton}
          onClick={() => this.toggleCollapse()}
        >
          {this.state.message}
        </p>
        <div className="content" ref={this.contents}>
          <ItemDetails />
        </div>
      </div>
    );
  }
}

/*
  message and toggledMessage
  content Below
*/
