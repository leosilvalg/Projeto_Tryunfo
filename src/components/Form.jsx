import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" data-testid="name-input" />
          </label>
          <label htmlFor="area">
            Descrição:
            <textarea type="text" name="area" data-testid="description-input" />
          </label>
          <label htmlFor="attr1">
            attr1:
            <input type="number" name="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            attr2:
            <input type="number" name="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            attr3:
            <input type="number" name="attr3" data-testid="attr3-input" />
          </label>
          <label htmlFor="img">
            Imagem:
            <input type="text" name="img" data-testid="image-input" />
          </label>
          <label htmlFor="select">
            Reridade:
            <select name="select" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="confi">
            Super Trybe Trunfo
            <input type="checkbox" name="confi" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
