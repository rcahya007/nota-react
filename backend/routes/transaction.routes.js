module.exports = app => {
    const transaction = require("../controllers/Transactions.js");

    var router = require("express").Router();

    router.post('/simpanNota', transaction.createNotaTransaksi);
    router.delete('/transactions/:id', transaction.deleteNotaTransaksi);
    router.get('/transactions', transaction.getAllTransactions);
    router.get('/dataPemasukan', transaction.getAllTransactionsDashboard);
    router.get('/transactions/:id', transaction.getOneTransaction);

    app.use('/',router);

}