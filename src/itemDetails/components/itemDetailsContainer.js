import React, { Component } from 'react';
import { CollapseComp } from '../../utils/components/collapseComp';
import ItemsList from './itemsList';

export class ItemDetailsContainer extends Component {
  render() {
    return (
      <div>
        <ItemsList />
        <CollapseComp
          message="Apply Coupon +"
          toggledMessage="Collapse -"
          itemDetails={false}
        />
      </div>
    );
  }
}
