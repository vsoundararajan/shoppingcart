import React, { Component } from 'react';

export class ItemDetails extends Component {
  render() {
    return (
      <div style={{ width: '500px' }}>
        <div style={{ float: 'left', width: '100px' }}>
          <img
            src={this.props.image}
            style={{ width: '100px', height: 'auto' }}
            alt="OFM ESS-3085 Chair"
          />
        </div>
        <div
          style={{
            float: 'left',
            width: '100px',
            fontSize: '.6em',
            color: '#696969'
          }}
        >
          {this.props.description}
        </div>
        <br style={{ clear: 'left' }} />
      </div>
    );
  }
}
