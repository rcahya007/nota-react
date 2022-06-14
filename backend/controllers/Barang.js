import db from "../config/Database.js";
import barang from "../models/Barang.js";
import category_barang from "../models/CategoryBarang.js"

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

export const getCategoryBarang = async (req,res) =>{
    try {
        const getCategory = await category_barang.findAll();
        res.status(200).json({Category: getCategory});
    } catch (error) {
        res.status(404).json(error)
    }
}