import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeItems as initializeItemsAction } from '../actions/actions';
import { CollapseComp } from '../../utils/components/collapseComp';

class ItemsList extends Component {
  componentWillMount() {
    const items = [
      {
        image: '/images/abcd.png',
        modelName: 'OFM ESS-3085',
        price: 99.99,
        description:
          'Essentials bu OFM ESS-3085 Racin style leather Gamimg chair Red $99.99'
      },
      {
        image: '/images/efgh.png',
        modelName: 'OFM ESS-3086',
        price: 199.99,
        description:
          'Essentials bu OFM ESS-3086 Racin style leather Gamimg chair Blue $199.99'
      },
      {
        image: '/images/efgh.png',
        modelName: 'OFM ESS-3087',
        price: 179.99,
        description:
          'Essentials bu OFM ESS-3087 Racin style leather Gamimg chair White $179.99'
      }
    ];
    this.props.initializeItems(items);
  }

  render() {
    const items = { ...this.props.itemsList };
    const renderItems = [];
    for (let i = 0; i < 3; i++) {
      let message = `See Item ${i} Details +`;
      renderItems.push(
        <CollapseComp
          message={message}
          toggledMessage="Hide item Details -"
          itemDetails={true}
        />
      );
    }
    return renderItems;
  }
}

function mapStateToProps(state) {
  let promocode = _.get(state, 'couponCode.validPromoCode') || false;
  let itemsList = _.get(state, 'itemsList.items');
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

ItemsList.propTypes = {
  promocode: PropTypes.bool.isRequired,
  itemsList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
