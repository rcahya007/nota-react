import Transactions from "../models/TransactionModel.js";

export const getAllTransactionsDashboard = async (req,res) => {
    try {
        const dataJumlahIn = await Transactions.sum('total_semua', {
            where: {
                jenis_transaksi: 'Pemasukan'
            }
        });
        const dataCountIn = await Transactions.count({
            where: {
                jenis_transaksi: 'Pemasukan'
            }
        });
        const dataJumlahOut = await Transactions.sum('total_semua', {
            where: {
                jenis_transaksi: 'Pengeluaran'
            }
        });
        const dataCountOut = await Transactions.count({
            where: {
                jenis_transaksi: 'Pengeluaran'
            }
        });
        res.status(200).json({
            hasilJumlahIn: dataJumlahIn,
            hasilBanyakIn: dataCountIn,
            hasilJumlahOut: dataJumlahOut,
            hasilBanyakOut: dataCountOut

        });
    } catch (error) {
        res.status(404).json(error);
    }
}

export const getAllTransactions = async (req,res) => {
    try {
        const getAllData = await Transactions.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        res.status(200).json({DataBarang: getAllData})
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getOneTransaction = async (req,res) => {
    try {
        const getOneData = await Transactions.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({DataBarang: getOneData});
    } catch (error) {
        res.status(404).json(error)
    }
}