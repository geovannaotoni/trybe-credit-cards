import React, { Component } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

class RegisteredCards extends Component {
  render() {
    const { registeredCards } = this.props;
    return (
      <article>
      {registeredCards
        .map(({ name, number, expiry, cvc }) => (
          <Cards
            name={name}
            number={number}
            expiry={expiry}
            cvc={cvc}
          />
        ))}
    </article>
    )
  }
}

export default RegisteredCards