import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CollapseComp } from '../../utils/components/collapseComp';
import ItemsList from './itemsList';

class ItemDetailsContainer extends Component {
  render() {
    return (
      <div>
        <ItemsList />
        {!this.props.promocode
          ? <CollapseComp
              message="Apply Coupon +"
              toggledMessage="Collapse -"
              itemDetails={false}
            />
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let promocode = _.get(state, 'couponCode.validPromoCode') || false;
  return {
    promocode
  };
}

ItemsList.propTypes = {
  promocode: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(ItemDetailsContainer);
