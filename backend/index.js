import express  from "express";
import cors from 'cors';
import Routes from "./routes/Routes.js";
import fileUpload from "express-fileupload";
import db from "./config/Database.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(express.static("dataTF"));


app.use(Routes);



try {
    await db.authenticate();
    console.log('Database Connected ...')
    //Seperti Migration, Jika tidak ada tabel maka akan dibuatkan table secara otomatis, Cukup jalankan sekali saja, kalau sudah harap di comment
    await db.sync();
} catch (error) {
    console.error(error);
}

app.listen(5000, ()=>console.log('Server running at port 5000'))