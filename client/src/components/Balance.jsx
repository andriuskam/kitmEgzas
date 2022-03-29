import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utilities/format'; // Ikeliama speciali biblioteka, kad rodytų skaičius su kableliais

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <main>
      <div className="circle">
        <h4>Jūsų balansas</h4>
        <h1>{numberWithCommas(total)}€</h1>
      </div>

    </main>
  )
}
