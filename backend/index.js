const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload");
// import db from "./config/Database.js";

const app = express();
app.use(cors())
app.use(express.json());

const db = require("./models");

db.sequelize.sync()
    .then(()=>{
        console.log("Synced db.");
    })
    .catch((err)=>{
        console.log("Failed to sync db: " + err.message);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to test Crud React Express First Time" });
});


require("./routes/barang.routes")(app);
require("./routes/transaction.routes")(app);
require("./routes/user.routes")(app);

app.use(fileUpload());
app.use(express.static("public"));

const port = process.env.PORT || 8080;

// try {
//     await db.authenticate();
//     console.log('Database Connected ...')
//     //Seperti Migration, Jika tidak ada tabel maka akan dibuatkan table secara otomatis, Cukup jalankan sekali saja, kalau sudah harap di comment
//     await db.sync();
// } catch (error) {
//     console.error(error);
// }

app.listen(port, ()=> {
    console.log('Server running at port 8080')
});