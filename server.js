const path = require('path');   // Įsikeliu "path" modulį, kuris leidžia dirbti su katalogais ir failais.
const express = require('express');   // Įsikeliu "express" modulį, kad galėčiau naudotis "express" karkasu.
const dotenv = require('dotenv');   // Įsikeliu "dotenv" modulį, kad galėčiau naudotis "lokaliais kintamaisiais".
const colors = require('colors');   // Įsikeliu "colors" modulį, kad galėčiau naudoti spalvas log'indamas konsolėje informaciją.
const morgan = require('morgan');   // Įsikeliu "morgan" modulį, kad galėčiau naudotis Node.js ir Express tarpinę programinę įrangą, skirta HTTP užklausoms ir klaidoms registruoti ir supaprastinti procesą.
const connectDB = require('./config/db');   // Įsikeliu prisijungimo prie MongoDB modulį iš "config" katalogo.

dotenv.config( {path: './config/config.env'} ); // Nurodau kelią į "lokaliuosius kintamuosius"

connectDB(); // Iškviečiu, prisijungimo prie mongoDB funkciją

const transactions = require('./routes/transactions');

const app = express(); // Iškviečiu express funkciją

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold));