import React, { useState } from 'react';
import CardList from './CardList';
import AddCardForm from './AddCardForm';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const removeCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div>
      <h1>Controle de Finanças</h1>
      <AddCardForm addCard={addCard} />
      <CardList cards={cards} removeCard={removeCard} />
      {}
    </div>
  );
};

export default App;


