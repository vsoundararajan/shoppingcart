import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CollapseComp } from '../../utils/components/collapseComp';

class ItemsList extends Component {
  render() {
    console.group('props at ItemsList render');
    console.log(this.props);
    console.groupEnd('props at ItemsList render');
    const items = { ...this.props.itemsList };
    const renderItems = [];
    for (let i = 0; i < 3; i++) {
      let message = `item${i + 1}`;
      let item = { ...items[i] };
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
  let itemsList = _.get(state, 'state.itemsList.items');
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
