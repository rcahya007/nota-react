import Barang from "../models/Barang.js";

export const getAllBarang = async (req,res ) =>{
    try {
        const getAllData = await Barang.findAll();
        res.status(200).json({DataBarang: getAllData})
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getOneBarang = async (req, res) =>{
    try {
        const getOne = await Barang.findOne({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json({Data: getOne})
    } catch (error) {
        res.status(404).json(error)
    }
}