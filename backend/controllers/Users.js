import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({
        msg: "Password dan Confirm Password tidak cocok!"
    });
    try {
        await Users.create({
            name: name,
            email: email,
            password: password,
        })
        res.json({msg: "Register Berhasil"});
    }catch (error){
        console.log(error);
    }
}

export const Login = async (req, res) => {
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
    

    try {
        const user = await Users.findOne({
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
        res.status(404).json({msg: "Nama Tidak Ada!"});
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

export const Logout = async (req, res) => {
    const user = await Users.findOne({
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
