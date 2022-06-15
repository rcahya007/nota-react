import db from "../config/Database.js";
import barang from "../models/Barang.js";
import category_barang from "../models/CategoryBarang.js";
import path from "path";

export const getAllBarang = async (req,res ) =>{
    try {
        const getAllData = await barang.findAll();
        res.status(200).json({DataBarang: getAllData})
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getOneBarang = async (req, res) =>{   
    try {
        const [results, metadata] = await db.query("SELECT * FROM barang INNER JOIN category_barang ON category_barang.id_category = barang.id_category_barang WHERE barang.id ="+ req.params.id);
        // const getOne = await barang.findOne({
        //     where: {
        //         id: req.params.id,
        //     },
        //     include: {
        //         model: category_barang,
        //         as: category_barang,
        //     }

        // });
        res.status(200).json({results});
    } catch (error) {
        res.status(404).json(error)
    }
}

export const saveBarang = async (req,res) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.lenght;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${name}`;
    const allowedType = ['.png','.jpg', '.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});

    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await barang.create({
                
            })
        } catch (error) {
            
        }
    })

}

export const updateBarang = async (req,res) => {

}

export const deleteBarang = async (req,res) => {

}





export const getCategoryBarang = async (req,res) =>{
    try {
        const getCategory = await category_barang.findAll();
        res.status(200).json({Category: getCategory});
    } catch (error) {
        res.status(404).json(error)
    }
}