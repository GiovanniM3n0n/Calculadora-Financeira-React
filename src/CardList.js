import React from 'react';
import Card from './Card';

const CardList = ({ cards, removeCard }) => {
  return (
    <div>
      <h2>Transações</h2>
      {cards.map((card, index) => (
        <Card key={index} index={index} card={card} removeCard={removeCard} />
      ))}
    </div>
  );
};

export default CardList;
