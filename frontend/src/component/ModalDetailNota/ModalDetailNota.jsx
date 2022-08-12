import React, { useState } from 'react'
import { XCircleIcon } from "@heroicons/react/solid";

const ModalDetailNota = ({closeModal, dataNota }) => {
    const [data, setData] = useState(dataNota);

    // const handleEdit = () => {
    //     closeModal(false);
    //     editBarang(true);
    // }
    console.log(data)


    return (
            <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
                <div className="bg-white w-2/3 rounded-xl mx-auto my-4 ">
                    <div className="border-b border-slate-400 mb-3">
                        <div className="flex justify-between items-center p-3">
                            <p className="text-2xl font-bold">Rincian Nota</p>
                            <button onClick={()=> {closeModal(false)}}>
                                <XCircleIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-2 text-left py-2 px-2">Barang / Jasa </div>
                            <div className="col-span-2 text-left py-2 px-2">Deskripsi</div>
                            <div className="col-span-1 text-center py-2 px-2">Banyak</div>
                            <div className="col-span-1 text-left py-2 px-2">Harga</div>
                            <div className="col-span-1 text-left py-2 px-2">Sub Total</div>
                        </div>
                        {
                            data.dataBarang.map((hasil,index)=>(
                                <div className="grid grid-cols-7 w-full border-b border-slate-400 space-b" key={index}>
                                    <div className="col-span-2 text-left py-2 px-2">{hasil.nama_barang}</div>
                                    <div className="col-span-2 text-left py-2 px-2">{hasil.deskripsi_barang}</div>
                                    <div className="col-span-1 text-center py-2 px-2">{hasil.banyak_barang}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(hasil.harga_barang)}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(hasil.total_harga_barang)} </div>
                                </div>
                            ))
                        }
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Total :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Metode Pembayaran :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Jenis Transaksi :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Pembeli :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Dibayar :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Uang Kembali :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        <div className="grid grid-cols-7 w-full border-y-2 border-slate-400 bg-slate-200 space-b">
                            <div className="col-span-6 text-right py-2 px-2 font-bold">Pembuat Nota :</div>
                            <div className="col-span-1 text-left py-2 px-2">Deskripsi</div>
                        </div>
                        
                    </div>
                    
                        
                    <div className='pb-4'>
                        <div className="border-t border-slate-400 flex justify-end ">
                            <div className='mt-4 align-bottom mr-5'>
                                <button className='rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300' >Edit Barang</button>
                                <button className='ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300' onClick={()=> {closeModal(false)}}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ModalDetailNota