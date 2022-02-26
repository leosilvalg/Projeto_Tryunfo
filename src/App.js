import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

// commit inicial
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      trunfoInput: false,
      rareInput: '',
      btnDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  // Pare realizar a validação tomei como base a aula extra do dia 25/02
  validate() {
    const { attr1Input, attr2Input, attr3Input } = this.state;
    const {
      nameInput,
      descriptionInput,
      imageInput,
      rareInput,
    } = this.state;
    this.setState({ btnDisable: true });
    const fields = [nameInput, descriptionInput, imageInput, rareInput];
    const notEmpty = fields.every((field) => field !== '');

    const maxValue = 210;
    const maxIndValue = 90;
    const zero = 0;
    const attr1 = parseInt(attr1Input, 10);
    const attr2 = parseInt(attr2Input, 10);
    const attr3 = parseInt(attr3Input, 10);
    const max = (attr1 + attr2 + attr3);

    if (notEmpty
      && (max <= maxValue)
      && (attr1 <= maxIndValue && attr1 >= zero)
      && (attr2 <= maxIndValue && attr2 >= zero)
      && (attr3 <= maxIndValue && attr3 >= zero)
    ) {
      this.setState({ btnDisable: false });
    }
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      trunfoInput,
      rareInput,
      btnDisable,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardImage={ imageInput }
          cardTrunfo={ trunfoInput }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ btnDisable }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardImage={ imageInput }
          cardTrunfo={ trunfoInput }
        />
      </div>
    );
  }
}

export default App;
