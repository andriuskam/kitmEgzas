import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utilities/format';

export const Transaction = ( {transaction} ) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span>{ transaction.text }</span>
      <span>{ sign }{numberWithCommas(Math.abs(transaction.amount)) }€</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)} >x</button>
    </li>
  )
}
