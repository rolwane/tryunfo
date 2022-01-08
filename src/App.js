import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rare,
      trunfo,
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
            cardRare={ rare }
            cardTrunfo={ trunfo }
            onInputChange={ this.handleChange }
          />
        </section>
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
      </section>
    );
  }
}

export default App;
