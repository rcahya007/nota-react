import { XCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

const ModalFormTambahNota = ({closeModal}) => {

    const [dataBarangSemua, setDataBarangSemua] = useState([]);
    const [namaBarangJasa, setBarangJasa] = useState('');
    const [hasilAmbilData, setHasilAmbilData] = useState([]);
    
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState('');
    const [banyak, setBanyak] = useState('');
    const [total, setTotal] = useState('');

    console.log(namaBarangJasa)

    return (
        <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
            <div className="bg-white w-2/3 rounded-xl mx-auto my-4 xl:w-1/2 ">
                <div className="border-b border-slate-400 ">
                    <div className="flex justify-between items-center p-3">
                        <p className="text-2xl font-bold">Tambah Barang</p>
                        <button onClick={()=> {closeModal(false)}}>
                            <XCircleIcon className="h-7 w-7" />
                        </button>
                    </div>
                </div>
                <form className='pb-4'>
                    <div className='mt-3 mx-4'>
                        <div className='mx-5 mt-2 mb-4'>
                            <label htmlFor="nama" className=''>Nama Barang/Jasa : </label>
                            <input id='nama' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 placeholder-shown:italic' placeholder='Masukkan Nama Barang' onChange={(e) => setBarangJasa(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mt-3 mx-4'>
                        <div className='mx-5 mt-2 mb-4'>
                            <label htmlFor="deskripsi" className=''>Deskripsi : </label>
                            <textarea id='deskripsi' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 placeholder-shown:italic' placeholder='Masukkan Deskripsi Barang'/>
                            <p className='text-sm mt-1'>Tulis deskripsi barang tanpa menggunakan emoticon.</p>
                        </div>
                    </div>
                    <div className='mt-3 mx-4'>
                        <div className='mx-5 mt-2 mb-4'>
                            <label htmlFor="harga" className=''>Harga : </label>
                            <input id='harga' disabled type="number" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 bg-slate-300' />
                        </div>
                    </div>
                    <div className='mt-3 mx-4'>
                        <div className='mx-5 mt-2 mb-4'>
                            <label htmlFor="banyak" className=''>Banyak : </label>
                            <input id='banyak' type="number" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' />
                            <p className='text-sm mt-1'>Masukkan banyak barang {`<=`} stok barang yang dipilih 
                            </p>
                        </div>
                    </div>
                    <div className='mt-3 mx-4'>
                        <div className='mx-5 mt-2 mb-4'>
                            <label htmlFor="total" className=''>Total : </label>
                            <input id='total' disabled type="number" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 bg-slate-300' />
                        </div>
                    </div>
                    <div className="border-t border-slate-400 flex justify-end ">
                        <div className='mt-4 align-bottom mr-5'>
                            <button className='rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300' type='submit'>Tambah Barang</button>
                            <button className='ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300' onClick={()=>closeModal(false)} >CLOSE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalFormTambahNota