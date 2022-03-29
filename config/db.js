const mongoose = require('mongoose'); // Įsikeliu objektų duomenų modeliavimo biblioteką, skirta MongoDB.

// Sukuriama funkcija, skirta sugeneruoti prisijungimą prie mongo duomenų bazės.
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.PASS);
        console.log(`Database running: ${conn.connection.host}`.magenta.bold);
    } catch (error) {
        console.log(`Database failed: ${error.message}`.red.bold);
        // process.exit(1);
    }
}
module.exports = connectDB;