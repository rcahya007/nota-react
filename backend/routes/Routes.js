import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { getAllTransactions } from "../controllers/Transactions.js";
import { getAllBarang, getCategoryBarang, getOneBarang } from "../controllers/Barang.js";



const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/dataPemasukan', getAllTransactions);
router.get('/barang', getAllBarang);
router.get('/barang/:id', getOneBarang);
router.get('/categoryBarang', getCategoryBarang);




export default router;