import React, { useEffect, useState } from 'react'
import { XCircleIcon } from "@heroicons/react/solid";
import axios from 'axios';

const ModalDetailBarang = ({closeModal, dataBarang}) => {
    const [data, setData] = useState(dataBarang);
    const [cateBarang, setCateBarang] = useState([])

    console.log(data)
    useEffect(()=>{
        const getData = async () =>{
            const respon = await axios.get('http://localhost:5000/categoryBarang')
            setCateBarang(respon.data.Category)
        }
        getData()
    },[])


    return (
            <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
                <div className="bg-white w-2/3 rounded-xl mx-auto my-4 ">
                    <div className="border-b border-slate-400 ">
                        <div className="flex justify-between items-center p-3">
                            <p className="text-2xl font-bold">Tambah Barang</p>
                            <button onClick={()=> {closeModal(false)}}>
                                <XCircleIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                    <form action="" className='pb-4'>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="nama" className='font-bold'>Nama Barang : </label>
                                <div>
                                    {data.nama_barang}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="harga" className='font-bold'>Harga Barang : </label>
                                <div>
                                    {new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.harga_barang)}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="category" className='font-bold'>Category Barang : </label>
                                <div>
                                    {data.category_barang}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="stock" className=''>Stock Barang : </label>
                                <input id='stock' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' />
                            </div>
                        </div>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-2'>
                                <label htmlFor="deskripsi" className=''>Deskripsi Barang : </label>
                                <textarea id='deskripsi' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 '></textarea>
                                <small>Tulis deskripsi barang tanpa menggunakan emoticon.</small>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="foto" className=''>Foto Barang : </label>
                                <input id='foto' type="file" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' />
                            </div>
                        </div>
                        <div className="border-t border-slate-400 flex justify-end ">
                            <div className='mt-4 align-bottom mr-5'>
                                <button className='rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300'>SIMPAN</button>
                                <button className='ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300'>CLOSE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default ModalDetailBarang