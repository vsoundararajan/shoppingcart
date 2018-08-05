import React, { Component } from 'react';
import LineItem from './cartLineItem';
import { ItemDetailsContainer } from '../../itemDetails/components/itemDetailsContainer';

export class CartTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 102.96,
      pickupSavings: 3.85,
      taxNfees: 8.92
    };
  }
  render() {
    let toolTip =
      'Pick up your order in the store help cut costs, and we pass the savings on to you.';
    return (
      <div className="cartTotal">
        <LineItem
          description={'Sub Total'}
          amount={this.state.subTotal}
          textDecoration={false}
          showToolTip={false}
        />
        <br />
        <LineItem
          description={'Pickup Savings'}
          amount={this.state.pickupSavings}
          textDecoration={true}
          showToolTip={true}
          toolTip={toolTip}
        />
        <LineItem
          description={'Tax and Fees'}
          amount={this.state.taxNfees}
          textDecoration={false}
          showToolTip={false}
        />
        <br />
        <hr />
        <LineItem
          description={'Total'}
          amount={
            this.state.subTotal + this.state.taxNfees - this.state.pickupSavings
          }
          textDecoration={false}
          showToolTip={false}
          bold={true}
        />
        <br />
        <ItemDetailsContainer />
      </div>
    );
  }
}
