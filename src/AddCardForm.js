import React, { useState } from 'react';

const AddCardForm = ({ addCard }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('receita');
  const [paymentMethod, setPaymentMethod] = useState('debito');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && type && paymentMethod) {
      const newCard = {
        name,
        amount,
        type,
        paymentMethod,
      };
      addCard(newCard);
      setName('');
      setAmount('');
      setType('receita');
      setPaymentMethod('debito');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar transação</h2>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Valor:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Tipo:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
        </select>
      </label>
      <label>
        Forma de Pagamento:
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
          <option value="PIX">PIX</option>
        </select>
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddCardForm;
