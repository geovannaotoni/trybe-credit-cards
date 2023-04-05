import React from 'react';
import './App.css';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Form from './components/Form';
import Header from './components/Header';
import RegisteredCards from './components/RegisteredCards';

class App extends React.Component {
  state = {
    name: '',
    number: '',
    expiry: '',
    cvc: '',
    focus: '',
    isDisable: true,
    registeredCards: [{ name: 'Example', number: '4100000000000000', expiry: '1030', cvc: '123'}, { name: 'Example', number: '6062820000000000', expiry: '1030', cvc: '123'}, { name: 'Example', number: '3000000000000000', expiry: '1030', cvc: '123'}]
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      focus: name,
    }), this.validationFields)
  }

  validationFields = () => {
    const { cvc, name, expiry } = this.state;

    const valCVC = cvc.length === 3;
    const valName = name.length > 0;
    const valExpiry = expiry.length === 4;

    this.setState({
      isDisable: !(valCVC && valName && valExpiry),
    });
  }

  handleClick = (event, name, number, expiry, cvc) => {
  event.preventDefault();
  const { registeredCards } = this.state;

  const newArrayOfCards = [ ...registeredCards, {
    name,
    number,
    expiry,
    cvc
  }]

    this.setState((prevState) => ({
      ...prevState,
      registeredCards: newArrayOfCards,
    }))
  }

  render() {
    const { state } = this;
    return (
      <>
        <Header />
        <main>
          <section>
            <Form
              name={state.name}
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              isDisable={state.isDisable}
              func={this.handleChange}
              registeredCards={state.registeredCards}
              funcBtn={this.handleClick}
            />
            <Cards
              name={state.name}
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              focused={state.focus}
            />
          </section>
        </main>
        <RegisteredCards registeredCards={state.registeredCards}/>
      </>
    );
  }
}

export default App;
