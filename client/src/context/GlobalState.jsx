import axios from "axios";
// Importuojamas "Global Context", leidžia dalytis informacija su bet kuriuo komponentu.
// Importuojamas "useReducer", leidžia valdyti programos būsenos pokyčius vienoje vietoje.
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Pradinė būsena
const initialState = {
    transactions: [],
    error: null,
    loading: true
};

// Kuriamas kontekstas
export const GlobalContext = createContext(initialState);

// Teikėjo komponentas
export const GlobalProvider = ( { children } ) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Veiksmai
    async function getTransaction() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.error
            });
        }

    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
            dispatch({
                type: 'ADD',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.error
            });
        }
    }

    return(
        <GlobalContext.Provider value={{ 
            transactions:state.transactions, 
            error: state.error,
            loading: state.loading,
            getTransaction, 
            deleteTransaction, 
            addTransaction 
        }}>
            { children }
        </GlobalContext.Provider>
    );
}