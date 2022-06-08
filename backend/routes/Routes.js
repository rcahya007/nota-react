import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { getAllByPemasukan } from "../controllers/Transactions.js";



const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/dataPemasukan', getAllByPemasukan);



export default router;