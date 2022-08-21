import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { createNotaTransaksi, deleteNotaTransaksi, getAllTransactions, getAllTransactionsDashboard, getOneTransaction } from "../controllers/Transactions.js";
import { getAllBarang, getCategoryBarang, getOneBarang, saveBarang, updateBarang, deleteBarang, getBarangForTambahBarang, getOneBarangSelect } from "../controllers/Barang.js";



const router = express.Router();

//Dashboard
router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/dataPemasukan', getAllTransactionsDashboard);

//Barang
router.get('/barang', getAllBarang);
router.get('/barang/:id', getOneBarang);
router.post('/barang', saveBarang);
router.patch('/barang/:id', updateBarang);
router.delete('/barang/:id', deleteBarang);
router.get('/categoryBarang', getCategoryBarang);
router.post('/getBarangFormTambah', getBarangForTambahBarang);

//PickUpBarangFromSelectOption
router.post('/barang/selectId/:id', getOneBarangSelect);

//Transactions
router.get('/transactions', getAllTransactions);
router.get('/transactions/:id', getOneTransaction);
router.post('/simpanNota', createNotaTransaksi);
router.delete('/transactions/:id', deleteNotaTransaksi);

//DetailTransactions


export default router;