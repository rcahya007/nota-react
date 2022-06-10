import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { getAllTransactions } from "../controllers/Transactions.js";
import { getAllBarang } from "../controllers/Barang.js";



const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/dataPemasukan', getAllTransactions);
router.get('/barang', getAllBarang)



export default router;