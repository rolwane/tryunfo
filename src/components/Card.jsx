import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      tempName: 'Nome da carta',
      tempImage: 'https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png',
      tempDescription: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit ad exi.',
    };
  }

  render() {
    const {
      tempName,
      tempImage,
      tempDescription,
    } = this.state;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{cardName || tempName}</h2>
        <img src={ cardImage || tempImage } alt={ cardName } data-testid="image-card" />
        <p className="description" data-testid="description-card">
          {cardDescription || tempDescription}
        </p>

        <p className="attribute" data-testid="attr1-card">
          <span>Atributo 1</span>
          {cardAttr1}
        </p>

        <p className="attribute" data-testid="attr2-card">
          <span>Atributo 2</span>
          {cardAttr2}
        </p>

        <p className="attribute" data-testid="attr3-card">
          <span>Atributo 3</span>
          {cardAttr3}
        </p>

        <p className="rarity" data-testid="rare-card">
          <span>Raridade:</span>
          <span>{cardRare}</span>
        </p>

        {cardTrunfo && <p data-testid="trunfo-card" className="trunfo">🏆 Super Trunfo</p>}
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
