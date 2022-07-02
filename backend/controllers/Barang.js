import db from "../config/Database.js";
import barang from "../models/Barang.js";
import category_barang from "../models/CategoryBarang.js";
import path from "path";
import fs from "fs";
import { Op } from "sequelize";

export const getAllBarang = async (req,res ) =>{
    try {
        const getAllData = await barang.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        res.status(200).json({DataBarang: getAllData})
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getOneBarang = async (req, res) =>{   
    try {
        const getOne = await barang.findOne({
            where: {
                id: req.params.id,
            }
        });
        if(getOne){
            const [results, metadata] = await db.query("SELECT * FROM barang INNER JOIN category_barang ON category_barang.id_category = barang.id_category_barang WHERE barang.id ="+ req.params.id);
            res.status(200).json({results});
        }else{
            res.status(404).json({msg: "Data Tidak Ada!"})
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

export const saveBarang = async (req,res) => {
    if(req.files === null) return res.status(400).json({msg: "Gambar tidak boleh kosong"});
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    const dateTime = date+'_'+time;
    const name = req.body.nama_barang;
    const file = req.files.file;
    const fileSize = file.data.lenght;
    const ext = path.extname(file.name);
    const fileName = file.md5 +'_'+ dateTime + ext;
    const url = `${req.protocol}://${req.get('host') }/images/${fileName}`;
    const allowedType = ['.png','.jpg', '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});

    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await barang.create({
                nama_barang: name,
                harga_barang: req.body.harga_barang,
                id_category_barang: req.body.id_category_barang,
                stok_barang: req.body.stok_barang,
                deskripsi_barang : req.body.deskripsi_barang,
                foto_barang: fileName,
                url: url,
            });
            res.status(201).json({msg: "Product Telah Dibuat."});
        } catch (error) {
            console.log(error);
        }
    })

}

export const updateBarang = async (req,res) => {
    const getOne = await barang.findOne({
        where: {
            id: req.params.id,
        }
    });

    if(!getOne) res.status(404).json({msg: "No Data Found!"});

    let fileName = "";
    if(req.files === null){
        fileName = getOne.foto_barang;
    }else{
        const file = req.files.file;
        const fileSize = file.data.lenght;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg', '.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5MB"});
        
        const filepath = `./public/images/${getOne.foto_barang}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
            
        })
    }
    const name = req.body.nama_barang;
    const url = `${req.protocol}://localhost:5000/images/${fileName}`;
    try {
        await barang.update({
            nama_barang: name,
            harga_barang: req.body.harga_barang,
            id_category_barang: req.body.id_category_barang,
            stok_barang: req.body.stok_barang,
            deskripsi_barang : req.body.deskripsi_barang,
            foto_barang: fileName,
            url: url,
        },{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Telah Berhasil Di Update"})
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteBarang = async (req,res) => {
    const getOne = await barang.findOne({
        where: {
            id: req.params.id,
        }
    });
    if(getOne){
        const filepath = `./public/images/${getOne.foto_barang}`;
        fs.unlinkSync(filepath);
        await barang.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Berhasil Dihapus!"})
    }else{
        res.status(404).json({msg: "No Data Found!"})
    }    
}

export const getCategoryBarang = async (req,res) =>{
    try {
        const getCategory = await category_barang.findAll();
        res.status(200).json({Category: getCategory});
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getBarangForTambahBarang = async (req,res) => {
    try {
        const get = await barang.findAll({
            where: {
                nama_barang: {
                    [Op.substring]: req.body.nama_barang,
                }
            }
        });
        res.status(200).json({result: get});
    } catch (error) {
        res.status(404).json(error);
    }
}