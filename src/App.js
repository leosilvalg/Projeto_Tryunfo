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
      hasTrunfo: false,
      array: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.reset = this.reset.bind(this);
    this.trunfo = this.trunfo.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCarta = this.removeCarta.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  // Após pesquisa na internet e documentação, percebi que estava entendendo de maneira errada o funcionamento das funções.
  onSaveButtonClick(event) {
    event.preventDefault();
    const { array } = this.state;
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
    } = this.state;

    const teste = {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      trunfoInput,
      rareInput,
    };
    this.reset();
    this.trunfo(trunfoInput);
    this.setState({
      array: [...array, teste],
    });
  }

  trunfo(temTrunfo) {
    if (temTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  // Tomei como base a aula do dia 22/02. Após pesquisa na internet e documentação, percebi que estava entendendo de maneira errada o funcionamento das funções.
  reset() {
    this.setState({
      nameInput: '',
      descriptionInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      imageInput: '',
      trunfoInput: false,
      rareInput: 'normal',
      btnDisable: true,
    });
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

  removeCarta(card) {
    const { array } = this.state;
    const cards = array.filter((item) => item.nameInput !== card.nameInput);
    const verificaTrunfo = card.trunfoInput;
    this.setState({
      array: cards,
      hasTrunfo: !verificaTrunfo,
    });
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
      hasTrunfo,
      array,
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
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ trunfoInput }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ btnDisable }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <div>
          <div>
            { array.map((card) => (
              <div key={ card.nameInput }>
                <Card
                  cardName={ card.nameInput }
                  cardDescription={ card.descriptionInput }
                  cardAttr1={ card.attr1Input }
                  cardAttr2={ card.attr2Input }
                  cardAttr3={ card.attr3Input }
                  cardRare={ card.rareInput }
                  cardImage={ card.imageInput }
                  cardTrunfo={ card.trunfoInput }
                  key={ card.nameInput }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.removeCarta(card) }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
