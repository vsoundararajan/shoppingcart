import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeItems as initializeItemsAction } from '../../itemDetails/actions/actions';

import LineItem from './cartLineItem';
import ItemDetailsContainer from '../../itemDetails/components/itemDetailsContainer';

class CartTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 102.96,
      pickupSavings: 3.85,
      taxNfees: 8.92
    };
  }

  componentWillMount() {
    const items = [
      {
        image: '/images/walmartChair.png',
        modelName: 'OFM ESS-3085',
        price: 99.99,
        description:
          'Essentials bu OFM ESS-3085 Racin style leather Gamimg chair Red $99.99'
      },
      {
        image: '/images/whiteChair.jpeg',
        modelName: 'OFM ESS-3086',
        price: 199.99,
        description:
          'Essentials bu OFM ESS-3086 Racin style leather Gamimg chair Blue $199.99'
      },
      {
        image: '/images/redChair.jpeg',
        modelName: 'OFM ESS-3087',
        price: 179.99,
        description:
          'Essentials bu OFM ESS-3087 Racin style leather Gamimg chair White $179.99'
      }
    ];
    this.props.initializeItems(items);
  }
  getSubtotal() {
    const items = { ...this.props.itemsList };
    let subTotal = 0;
    for (let i = 0; i < 3; i++) {
      let item = { ...items[i] };
      subTotal += item['price'];
    }
    return subTotal;
  }
  render() {
    let subTotal = this.getSubtotal();
    let total = 0;
    if (this.props.promocode) {
      total =
        subTotal +
        this.state.taxNfees -
        (this.state.pickupSavings + subTotal * 0.1);
    } else {
      total = subTotal + this.state.taxNfees - this.state.pickupSavings;
    }
    let toolTip =
      'Pick up your order in the store help cut costs, and we pass the savings on to you.';
    return (
      <div className="cartTotal">
        <LineItem
          description={'Sub Total'}
          amount={subTotal}
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
        <br />
        <LineItem
          description={'Promo Code discount'}
          amount={
            this.props.promocode === false
              ? (0.0).toFixed(2)
              : (subTotal * 0.1).toFixed(2)
          }
          textDecoration={false}
          showToolTip={false}
        />
        <br />
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
          amount={total}
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

function mapStateToProps(state) {
  let promocode = _.get(state, 'couponCode.validPromoCode') || false;
  let itemsList = _.get(state, 'itemsList.items');
  if (!itemsList) {
    itemsList = _.get(state, 'itemsList.state.items');
  }
  return {
    promocode,
    itemsList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      initializeItems: initializeItemsAction
    },
    dispatch
  );
}

CartTotal.propTypes = {
  promocode: PropTypes.bool.isRequired,
  itemsList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
