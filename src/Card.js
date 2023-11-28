import React from 'react';

const Card = ({ index, card, removeCard }) => {
  return (
    <div className="card">
      <div className="card-info">
        <p><strong>Nome:</strong>{card.name}</p>
        <p><strong>Valor:</strong> R${card.amount}</p>
      </div>
      <div className="card-info">
        <p><strong>Tipo:</strong> {card.type}</p>
        <p><strong>Forma de Pagamento:</strong> {card.paymentMethod}</p>
      </div>
      <button onClick={() => removeCard(index)}>Remover</button>
    </div>
  );
};

export default Card;


