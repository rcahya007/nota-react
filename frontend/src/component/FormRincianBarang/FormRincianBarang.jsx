import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../container/Home/Home';
import ModalEditRincianBarang from '../ModalEditRincianBarang/ModalEditRincianBarang';

const FormRincianBarang = ({barang, setDataBarang}) => {
    const navigate = useNavigate();
    const {state} = useContext(AuthContext);
    const [total_harga, setTotalHarga] = useState(0);
    const [metod_pembayaran, setMetodPembayaran] = useState('')
    const [jenis_transaksi, setJenisTransaksi] = useState('')
    const [pembeli, setPembeli] = useState('')
    const [kembali, setKembali] = useState(0)
    const [dibayar, setDibayar] = useState('')
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [closeModal, setCloseModal] = useState(false)
    const [dataEdit, setDataEdit] = useState('')

    useEffect(()=>{
        if(barang.length>0)
        console.log(barang)
    },[barang])

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const handleMetode = (e) => {
        if(e.target.value === "Cash"){
            setFile(null)
            setPreview("")
            setMetodPembayaran(e.target.value)
        }if(e.target.value === "Transfer"){
            setMetodPembayaran(e.target.value)
        }
    }

    const handleJenis = (e) => {
        setJenisTransaksi(e.target.value)
    }

    const handleDibayar = (e) => {
        setDibayar(e.target.value)
        setKembali(e.target.value - total_harga)
    }
    
    useEffect(()=>{
        if(barang.length>0){
            const total_harga = barang.map(harga => harga.total_harga).reduce((hargaSebelum,hargaSesudah) => hargaSebelum+hargaSesudah);
            setTotalHarga(total_harga);
            setKembali(dibayar-total_harga)
        }
        if(barang.length===0){
            setTotalHarga(0);
        }        
    },[barang])    

    const handleEdit = (id) => {
        const getBarang = barang.find(x => x.id === id);
        // console.log(getBarang)
        setDataEdit(getBarang);
        setCloseModal(true)
    }

    const handleHapus = (id) => {
        setDataBarang(barang.filter(data => data.id !== id));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(barang.length > 0) {
            const formData = new FormData();
            formData.append("barang", JSON.stringify(barang));
            formData.append("total", total_harga);
            formData.append("metode_pembayaran",metod_pembayaran);
            formData.append("jenis_transaksi", jenis_transaksi);
            formData.append("pembeli", pembeli);
            formData.append("dibayar", dibayar);
            formData.append("kembali", kembali);
            formData.append("pembuat", state.user.name);
            formData.append("file", file);
            console.log(JSON.parse(formData.get('barang')))
            console.log(formData.get('file'))
            try {
                await axios.post("http://localhost:5000/simpanNota", formData, {
                    headers:{
                        "Content-type": "multipart/form-data"
                    }
                });
                console.log("data Masuk")
                navigate('/nota')
            } catch (error) {
                console.log(error)
            }
        }else{
            console.log("Isi data Barang terlebih dahulu")
        }
        
    }

    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
                <div className="grid grid-cols-7  bg-slate-200 w-full border-y-2 border-slate-400 space-b">
                    <div className="col-span-2 text-left py-2 px-2 font-bold">Barang/Jasa</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Deskripsi</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Banyak</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Harga</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Sub Total</div>
                    <div className="col-span-1 text-center py-2 px-2 font-bold">Action</div>
                </div>
                {
                    barang.length > 0 ? 
                    <div>
                        {
                            barang.map((data) => (
                                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b align-middle" key={data.id}>
                                    <div className="col-span-2 py-2 px-2 flex items-center">{data.nama_barang}</div>
                                    <div className="col-span-1 text-left flex items-center py-2 px-2">{data.deskripsi}</div>
                                    <div className="col-span-1 text-left flex items-center py-2 px-2">{data.banyak_barang}</div>
                                    <div className="col-span-1 text-left flex items-center py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.harga_barang)}</div>
                                    <div className="col-span-1 text-left flex items-center py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.total_harga)}</div>
                                    <div className="col-span-1 text-center py-2 px-2">
                                        <button className='border-2 border-slate-800 p-2 rounded-md hover:bg-slate-800 hover:duration-300 hover:text-white' 
                                        onClick={()=>{handleEdit(data.id)}}>
                                            Edit    
                                        </button> | 
                                        <button className='border-2 border-red-700 p-2 rounded-md hover:bg-red-700 hover:duration-300 text-red-700 hover:text-white ml-1' onClick={()=>{handleHapus(data.id)}}>
                                        HAPUS    
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                            <div className="col-span-2 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                        </div>   
                }
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">TOTAL :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(total_harga)}</div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Metode Pembayaran :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input type="radio" name="metode_pembayaran" id="Cash" value='Cash' onChange={handleMetode} />
                        <label htmlFor="Cash"> Cash</label><br></br>
                        <input type="radio" name="metode_pembayaran" id="Transfer" value='Transfer' onChange={handleMetode}/>
                        <label htmlFor="Transfer"> Transfer</label><br></br>
                        {
                            metod_pembayaran === "Transfer" ? (
                                <div className='ml-5'>
                                    Masukkan Bukti Transfer
                                    <div className='border-2 border-b-slate-600 rounded-md px-2 py-2 mt-1 truncate'>
                                        <input type="file" onChange={loadImage} accept="image/*"/>
                                    </div>
                                    {
                                        preview ? (
                                            <div className='my-2'>
                                                <img src={preview} className="w-1/3" alt="Preview IMG" />
                                            </div>
                                        ) : ("")
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Jenis Transaksi :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input type="radio" name="jenis_transaksi" id="Pemasukkan" value='Pemasukkan' onChange={handleJenis} />
                        <label htmlFor="Pemasukkan"> Pemasukkan</label><br></br>
                        <input type="radio" name="jenis_transaksi" id="Pengeluaran" value='Pengeluaran' onChange={handleJenis} />
                        <label htmlFor="Pengeluaran"> Pengeluaran</label><br></br>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">
                        <label htmlFor="Pembeli">Pembeli :</label>
                    </div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input className='w-full border-2 rounded-md px-2' type="text" id="Pembeli" name="Pembeli" onChange={(e) => {setPembeli(e.target.value)}}/>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">
                        <label htmlFor="dibayar">Dibayar :</label>
                    </div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input className='w-full border-2 rounded-md px-2' type="number" id="dibayar" name="dibayar" onChange={handleDibayar}/>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Kembali :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <p>{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(kembali)}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button className='bg-amber-400 py-2 px-6 rounded-md hover:bg-amber-500 border-2 border-white duration-300 hover:border-2 hover:border-black' onClick={handleSubmit}>
                        Simpan {`&`} Print
                    </button>
                </div>
                {closeModal && <ModalEditRincianBarang closeModal={setCloseModal} barang={barang} setDataBarang={setDataBarang} dataBarang={dataEdit}/>}
        </div>
    )
}

export default FormRincianBarang