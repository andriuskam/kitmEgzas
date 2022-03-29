const express = require('express'); // Įsikeliu "express" modulį, kad galėčiau naudotis "express" karkasu.
const router = express.Router(); // Router() funkcija naudojama naujam router objektui sukurti.
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions'); // Pasiemu 

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router;