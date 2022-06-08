import Transactions from "../models/TransactionModel";

export const getAllByPemasukan = async (req,res) => {
    try {
        const data = await Transactions.findAll({
            where: {
                jenis_transaksi: 'Pemasukan'
            }
        });
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}