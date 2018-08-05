import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { setPromoCode as setPromoCodeAction } from '../actions/actions';

class CouponForm extends Component {
  costructor(props) {
    this.setState({ promocode: '' });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ promocode: event.target.value });
  };

  handleSubmit(event, props) {
    event.preventDefault();
    if (this.state.promocode.toLowerCase() === 'discount') {
      props.setPromoCode(this.state.promocode);
    } else {
      alert(this.state.promocode + ' is invalid');
      this.setState({ promocode: '' });
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" width="50" onChange={this.handleChange} />
          <button onClick={e => this.handleSubmit(e, this.props)}>Apply</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let promocode = _.get(state, 'couponCode.state.state');
  return {
    promocode
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setPromoCode: setPromoCodeAction
    },
    dispatch
  );
}

CouponForm.propTypes = {
  promocode: PropTypes.object.isRequired,
  setPromoCode: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CouponForm);
