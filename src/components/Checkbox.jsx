import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <>
        <input
          type="checkbox"
          name="cardTrunfo"
          id="trunfo-input"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <span>Super Trunfo:</span>
      </>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;
