import React, { useEffect, useState } from 'react'
import { XCircleIcon } from "@heroicons/react/solid";

const ModalDetailBarang = ({closeModal, dataBarang, editBarang}) => {
    const [data] = useState(dataBarang);

    const handleEdit = () => {
        closeModal(false);
        editBarang(true);
    }

    useEffect(()=>{
        return(
            ()=>{}
        )
    },[])


    return (
            <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
                <div className="bg-white w-2/3 rounded-xl mx-auto my-4 xl:w-1/2">
                    <div className="border-b border-slate-400 ">
                        <div className="flex justify-between items-center p-3">
                            <p className="text-2xl font-bold">Detail Barang</p>
                            <button onClick={()=> {closeModal(false)}}>
                                <XCircleIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <div className='mt-3 mx-4 border-slate-400 border-b'>
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
                                    {data.category}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="stock" className='font-bold'>Stock Barang : </label>
                                <div>
                                    {data.stok_barang}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-2'>
                                <label htmlFor="deskripsi" className='font-bold'>Deskripsi Barang : </label>
                                <div>
                                    {data.deskripsi_barang}
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="foto" className='font-bold'>Foto Barang : </label>
                                <div className='mt-2'>
                                    <img src={data.url} alt="Foto Barang" className='w-1/4'/>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-400 flex justify-end ">
                            <div className='mt-4 align-bottom mr-5'>
                                <button className='rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300' onClick={handleEdit}>Edit Barang</button>
                                <button className='ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300' onClick={()=> {closeModal(false)}}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ModalDetailBarang