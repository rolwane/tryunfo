import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr01: '',
      attr02: '',
      attr03: '',
      image: '',
      rarity: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.formValidation);
  }

  formValidation() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
    } = this.state;

    const noventa = 90;
    const duzentosEDez = 210;

    if (
      name.length > 0
      && description.length > 0
      && image.length > 0
      && attr01.length > 0
      && attr02.length > 0
      && attr03.length > 0
      && Number(attr01) >= 0
      && Number(attr02) >= 0
      && Number(attr03) >= 0
      && Number(attr01) <= noventa
      && Number(attr02) <= noventa
      && Number(attr03) <= noventa
      && Number(attr01) + Number(attr02) + Number(attr03) <= duzentosEDez
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rarity,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <section className="container">
        <section className="col-form">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr01 }
            cardAttr2={ attr02 }
            cardAttr3={ attr03 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
          />
        </section>
        <section className="col-card">
          <h2 className="preview-title">Pré-visualização</h2>
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr01 }
            cardAttr2={ attr02 }
            cardAttr3={ attr03 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
          />
        </section>
      </section>
    );
  }
}

export default App;
