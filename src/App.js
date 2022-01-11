import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
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

      initialForm: {
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
      remainingPoints: 210,
      savedCards: [],
      hasTrunfo: false,
      searchValues: {
        searchText: '',
        searchRarity: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.hasTrunfoValidation = this.hasTrunfoValidation.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { formData } = this.state;
    let { remainingPoints } = this.state;
    const duzentosEDez = 210;
    formData[target.name] = value;
    remainingPoints = duzentosEDez - (Number(formData.attr01) + Number(formData.attr02));
    remainingPoints -= Number(formData.attr03);
    this.setState({ formData, remainingPoints }, this.formValidation);
  }

  handleSearch({ target }) {
    const value = target.name === 'searchRarity'
      && target.value === 'todas' ? '' : target.value.toLowerCase();

    this.setState((previousState) => (
      { searchValues: { ...previousState.searchValues, [target.name]: value } }
    ));
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
  }

  removeCard(id) {
    const { savedCards } = this.state;
    const updatedCards = savedCards.filter((card) => card.name !== id);
    this.setState({ savedCards: updatedCards }, this.hasTrunfoValidation);
  }

  render() {
    const {
      formData,
      isSaveButtonDisabled,
      hasTrunfo,
      savedCards,
      remainingPoints,
      searchValues,
    } = this.state;

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

    const {
      searchText,
      searchRarity,
    } = searchValues;

    const filteredCards = searchRarity
      ? savedCards.filter((card) => (
        card.name.toLowerCase().includes(searchText) && card.rarity === searchRarity
      ))
      : savedCards.filter((card) => (
        card.name.toLowerCase().includes(searchText)
      ));

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
              remainingPoints={ remainingPoints }
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
            />
          </section>
        </section>
        <section className="cardList">

          <div className="filterCards">
            <h2>Todas as cartas</h2>
            <span id="search-legend">Filtros de busca:</span>
            <input
              type="text"
              name="searchText"
              placeholder="Nome da carta"
              id="input-search"
              data-testid="name-filter"
              value={ searchText }
              onChange={ this.handleSearch }
            />
            <select
              data-testid="rare-filter"
              onChange={ this.handleSearch }
              name="searchRarity"
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </div>

          {filteredCards.map((card) => (
            <div key={ card.name } className="container-card">
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr01 }
                cardAttr2={ card.attr02 }
                cardAttr3={ card.attr03 }
                cardImage={ card.image }
                cardRare={ card.rarity }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                className="btn-remove-card"
                data-testid="delete-button"
                onClick={ () => this.removeCard(card.name) }
              >
                <FaTrashAlt />
                Excluir
              </button>
            </div>))}
        </section>
      </>
    );
  }
}

export default App;
