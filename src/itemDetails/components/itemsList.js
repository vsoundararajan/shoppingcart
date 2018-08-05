import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CollapseComp } from '../../utils/components/collapseComp';

class ItemsList extends Component {
  render() {
    const items = { ...this.props.itemsList };
    const renderItems = [];
    for (let i = 0; i < 3; i++) {
      let item = { ...items[i] };
      let message = item['modelName'];
      console.group('item[image] at ItemsList');
      console.log(item);
      console.groupEnd('item[image] at ItemsList');
      renderItems.push(
        <CollapseComp
          image={item['image']}
          description={item['description']}
          modelName={item['modelName']}
          price={item['price']}
          key={i}
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
  if (!itemsList) {
    itemsList = _.get(state, 'itemsList.state.items');
  }
  return {
    promocode,
    itemsList
  };
}

ItemsList.propTypes = {
  promocode: PropTypes.bool.isRequired,
  itemsList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(ItemsList);
