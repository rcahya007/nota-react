import React, { useState } from 'react'
import { XCircleIcon } from "@heroicons/react/solid";

const ModalDetailNota = ({closeModal, dataNota }) => {
    const [data, setData] = useState(dataNota);

    // const handleEdit = () => {
    //     closeModal(false);
    //     editBarang(true);
    // }
    console.log(dataNota)


    return (
            <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
                <div className="bg-white w-2/3 rounded-xl mx-auto my-4 ">
                    <div className="border-b border-slate-400 ">
                        <div className="flex justify-between items-center p-3">
                            <p className="text-2xl font-bold">Rincian Nota</p>
                            <button onClick={()=> {closeModal(false)}}>
                                <XCircleIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                    <table className="w-full">
                        <thead className='text-left bg-slate-200'>
                            <tr>
                                <th className='p-4 xl:w-1/2 md:w-1/6 sm:w-1/12 '>Barang / Jasa </th>
                                <th className='text-left'>Deskripsi</th>
                                <th className='text-left'>Banyak</th>
                                <th className='text-left'>Harga</th>
                                <th className='text-left'>Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                allTransactions.map((hasil,index)=>(
                                    <tr key={index}>
                                        <td className='p-4 border-b-2 w-1/3 sm:py-1'>{hasil.nama_pembeli}</td>
                                        <td className='border-b-2 text-center'>{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(hasil.total_semua)}</td>
                                        <td className='border-b-2 text-center'>{new Date(hasil.updatedAt).toLocaleString('id-ID',{weekday: 'long', day: 'numeric',month: '2-digit', year:'2-digit', hour: '2-digit', minute: '2-digit' }).replace(".",":")}</td>
                                        <td className='border-b-2 text-center'>
                                            <button className='p-2 text-black border border-black rounded hover:bg-slate-600 hover:text-white hover:duration-300 my-2 mr-1'  onClick={()=> getDetail(hasil.id)}>Detail</button> | 
                                            <button className='p-2 ml-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white hover:duration-300' >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            } */}
                        </tbody>
                    </table>
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