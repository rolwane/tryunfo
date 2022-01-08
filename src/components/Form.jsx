import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            name="name"
            id="name-input"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea
            name="description"
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          Attr01:
          <input
            type="number"
            name="attr01"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Attr02:
          <input
            type="number"
            name="attr02"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Attr03:
          <input
            type="number"
            name="attr03"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="image"
            id="image-input"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select name="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
          Super Trunfo:
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
