const db = require("../models");
const User = db.user;

exports.getUsers = async (req, res) => {
    try {
        const getone = await User.findAll();
        res.json(getone);
    } catch (error) {
        console.log(error);
    }
}

exports.Register = async (req, res) => {
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({
        msg: "Password dan Confirm Password tidak cocok!"
    });
    try {
        await User.create({
            name: name,
            email: email,
            password: password,
        })
        res.json({msg: "Register Berhasil"});
    }catch (error){
        console.log(error);
    }
}

exports.Login = async (req, res) => {
    //Digunakan Ketika Mencari semua
    // try {
    //     const user = await Users.findAll({
    //         where:{
    //             name: req.body.name
    //         }
    //     })
    //     // console.log(req.body.password)
    //     const cekPass = user[0].password;
    //     if (cekPass === req.body.password && user){
    //         res.json({msg: "Data yang dimasukkan Betul", user: user})
    //     }else {
    //         res.status(404).json({msg: "Password Salah"})
    //     }
    // } catch (error) {
    //     res.status(404).json({msg: "Nama Tidak Ada!"});
    // }
    // const user = await users.findOne({
    //     where:{
    //         name: req.body.name,
    //         password: req.body.password
    //     }
    // });
    // res.status(400).json({user})

    try {
        const user = await User.findOne({
                where:{
                    name: req.body.name,
                    password: req.body.password
                }
            });
        if(user){
            res.json({msg: "Data yang dimasukkan Betul", user: user})
        }else{
            res.status(404).json({msg: "Password Salah"})
        }
    } catch (error) {
        res.status(404).json({msg: "Error"});
    }


    //Digunakan ketikan mencari Salah satu
    // const user = await Users.findOne({
    //     where:{
    //         name: req.body.name,
    //         password: req.body.password
    //     }
    // });
    // if(user){
    //     res.json({msg: "Ada Data yang sama"})
    // }else{
    //     res.status(404).json({msg: "Nama atau Email Tidak ditemukan"});
    // }
    
}

exports.Logout = async (req, res) => {
    const user = await User.findOne({
        where:{
            nama: req.body.name,
            password: req.body.password
        }
    });
    if(user){
        res.json({msg: "Anda Berhasil Logout"})
    }
    else{
        res.status(404).json({msg: "Anda Dipaksa Keluar"});
    }
}
