import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <h2 className="form-title">Adicionar nova carta</h2>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Nome da carta"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea
            name="description"
            id="description-input"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input" className="label-flex">
          <span>Attr01:</span>
          <input
            type="number"
            name="attr01"
            id="attr1-input"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input" className="label-flex">
          <span>Attr02:</span>
          <input
            type="number"
            name="attr02"
            id="attr2-input"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input" className="label-flex">
          <span>Attr03:</span>
          <input
            type="number"
            name="attr03"
            id="attr3-input"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <span className="span-points">Pontos restantes: 200</span>

        <label htmlFor="image-input" className="label-flex label-image">
          <span>Imagem:</span>
          <div className="container-input-image">
            <span><FaLink /></span>
            <input
              type="text"
              name="image"
              id="image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </div>
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select
            name="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input" className="label-check">
          <input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <span>Super Trunfo:</span>
        </label>

        <button
          type="submit"
          data-testid="save-button"
          className="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
