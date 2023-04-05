import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { name, number, expiry, cvc, isDisable, func, funcBtn } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Escreva seu nome:
          <input
            type="text"
            name="name"
            id="name"
            onChange={ func }
            value={ name }
          />
        </label>
        <label htmlFor="number">
          Digite o número do cartão:
          <input
            type="text"
            name="number"
            id="number"
            onChange={ func }
            value={ number }
          />
        </label>
        <label htmlFor="expiry">
          Digite a data de validade:
          <input
            type="text"
            name="expiry"
            id="expiry"
            onChange={ func }
            value={ expiry }
          />
        </label>
        <label htmlFor="cvc">
          Digite o código de verificação:
          <input
            type="text"
            name="cvc"
            id="cvc"
            onChange={ func }
            value={ cvc }
          />
        </label>
        <button 
          disabled={ isDisable }
          onClick={ (e) => funcBtn(e, name, number, expiry, cvc)}  
        >
          Cadastre
        </button>
      </form>
    );
  }
}

export default Form;