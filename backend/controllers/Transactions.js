import detail_transactions from "../models/DetailTransaction.js";
import Transactions from "../models/TransactionModel.js";
import Barang from "../models/Barang.js";
import path from "path";

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

export const createNotaTransaksi = async (req, res) => {
    let fileName = '';
    let url = '';
    const barang = JSON.parse(req.body.barang);
    if(req.body.metode_pembayaran === "Transfer"){
        if(req.files === null) return res.status(400).json({msg: "Gambar tidak boleh kosong"});
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        const dateTime = date+'_'+time;
        const file = req.files.file;
        const fileSize = file.data.lenght;
        const ext = path.extname(file.name);
        const nameFile = path.basename(file.name,ext);
        const buktiTF = nameFile +'_'+ dateTime + ext;
        const link = `${req.protocol}://${req.get('host')}/dataTF/${buktiTF}`;
        const allowedType = ['.png','.jpg', '.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});

        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5MB"});
        fileName = buktiTF;
        url = link;

        file.mv(`./public/dataTF/${fileName}`, async(err)=>{
            if(err) return res.status(500).json({msg: err.message});
        })

    }   

    try {
        const dataTransactions = await Transactions.create({
            total_semua: req.body.total,
            uang_bayar: req.body.dibayar,
            uang_kembali: req.body.kembali,
            nama_pembeli: req.body.pembeli,
            pembuat : req.body.pembuat,
            metode_pembayaran: req.body.metode_pembayaran,
            jenis_transaksi: req.body.jenis_transaksi,
            bukti_tf: fileName,
            url: url,
        });

        await barang.map(element => {
            const sisaStock = element.stok_barang - element.banyak_barang;

            Barang.update({
                stok_barang: sisaStock
            },{
                where:{
                    id: element.id
                }
            });

            detail_transactions.create({
                id_transaction: dataTransactions.id,
                id_barang: element.id,
                deskripsi_pembelian: element.deskripsi,
                banyak_barang: element.banyak_barang,
                total_harga_barang: element.total_harga,
            })
        });
        res.status(201).json({msg: "Transaksi Telah Dibuat."});
    } catch (error) {
        console.log(error);
    }
}