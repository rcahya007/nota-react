import express  from "express";
import db from "./config/Database.js";
import cors from 'cors';
import Users from "./models/UserModel.js";
import Barang from "./models/Barang.js";
import Transactions from "./models/TransactionModel.js";
import Routes from "./routes/Routes.js";
const app = express();
app.use(cors())
app.use(express.json());
app.use(Routes);



try {
    await db.authenticate();
    console.log('Database Connected ...')
    //Seperti Migration, Jika tidak ada tabel maka akan dibuatkan table secara otomatis, Cukup jalankan sekali saja, kalau sudah harap di comment
    await Users.sync();
    await Barang.sync();
    await Transactions.sync();
} catch (error) {
    console.error(error);
}




app.listen(5000, ()=>console.log('Server running at port 5000'))