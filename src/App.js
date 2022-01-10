import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {
        name: '',
        description: '',
        attr01: 0,
        attr02: 0,
        attr03: 0,
        image: '',
        rarity: 'normal',
        cardTrunfo: false,
      },
      isSaveButtonDisabled: true,
      initialForm: {
        name: '',
        description: '',
        attr01: 0,
        attr02: 0,
        attr03: 0,
        image: '',
        rarity: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
      savedCards: [],
      hasTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.hasTrunfoValidation = this.hasTrunfoValidation.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { formData } = this.state;
    formData[target.name] = value;
    this.setState({ formData }, this.formValidation);
  }

  formValidation() {
    const { formData } = this.state;
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
    } = formData;

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

  hasTrunfoValidation() {
    const { savedCards } = this.state;
    const bool = savedCards.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo: bool });
  }

  saveCard(event) {
    event.preventDefault();

    const { formData, savedCards, initialForm } = this.state;
    const previousCards = savedCards;
    this.setState({ savedCards: [...previousCards, formData] }, this.hasTrunfoValidation);
    this.setState({ formData: { ...initialForm } });
    this.setState({ isSaveButtonDisabled: true });
    console.log(initialForm);
  }

  render() {
    const { formData, isSaveButtonDisabled, hasTrunfo, savedCards } = this.state;
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rarity,
      cardTrunfo,
    } = formData;

    return (
      <>
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
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.saveCard }
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
              // onInputChange={ this.handleChange }
            />
          </section>
        </section>
        <div>
          {savedCards.map((card) => (
            <Card
              key={ card.name }
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr01 }
              cardAttr2={ card.attr02 }
              cardAttr3={ card.attr03 }
              cardImage={ card.image }
              cardRare={ card.rarity }
              cardTrunfo={ card.cardTrunfo }
            />))}
        </div>
      </>
    );
  }
}

export default App;
