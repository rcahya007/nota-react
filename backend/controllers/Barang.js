import Barang from "../models/Barang.js";

export const getAllBarang = async (req,res ) =>{
    try {
        const getAllData = await Barang.findAll();
        res.status(200).json({DataBarang: getAllData})
    } catch (error) {
        
    }
}