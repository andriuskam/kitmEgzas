import React from 'react';
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

export const Main = () => {
    return (
        <div className="container">
            <div className="left">
                <Balance />
                <IncomeExpenses />
            </div>
            <div className="right">
                <AddTransaction />
                <TransactionList />
            </div>
        </div>
    )
}
