import React, { Component } from 'react';
import { ItemDetails } from '../../itemDetails/components/itemDetails';
import CouponForm from '../../applyCouponCode/components/couponForm';

export class CollapseComp extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.collapseButton = React.createRef();
    this.contents = React.createRef();
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      message: this.props.message
    };
  }
  toggleCollapse() {
    let details = this.contents.current;
    let message = '';
    if (details.style.display === 'block') {
      details.style.display = 'none';
      message = this.props.message;
    } else {
      details.style.display = 'block';
      message = this.props.toggledMessage;
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
          {this.props.itemDetails ? <ItemDetails /> : <CouponForm />}
        </div>
      </div>
    );
  }
}

/*
  message and toggledMessage
  content Below
*/
