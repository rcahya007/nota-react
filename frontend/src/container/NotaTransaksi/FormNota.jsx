import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import FormDisable from '../../component/FormDisable/FormDisable';
import FormRincianBarang from '../../component/FormRincianBarang/FormRincianBarang';
import ModalFormTambahNota from '../../component/ModalFormTambahNota/ModalFormTambahNota';
import Navigation from '../../component/Navigation/Navigation';
import { AuthContext } from '../Home/Home';

const FormNota = () => {
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();
    const [dataBarang, setDataBarang] = useState([]);
    const [tambahNotaBarang, setTambahNotaBarang] = useState(false);


    useEffect(()=>{
        if(state.user == null){
            navigate('/');
        }
    },[state,navigate]);


    return (
        <div>
            <Navigation />
            <title>TAMBAH TRANSACTIONS | Kodehack</title>
            <div className='container m-auto'>
                <div className='justify-center text-center my-4 text-4xl mb-5'>
                    <h1>PEMBUATAN NOTA | Kodehack</h1>
                </div>
                <div className='my-16'>
                    <div className="text-3xl font-bold float-left">
                        Form Barang
                    </div>
                    <button className='text-xl float-right bg-white p-2 rounded-md border-2 border-black hover:bg-slate-800 hover:text-white duration-300 mb-3'>
                            Lihat Semua Nota Transaksi
                    </button>
                </div>
                <FormDisable />
                <div className='flex items-center justify-center mt-5'>
                    <button className='bg-amber-400 py-2 px-6 rounded-md hover:bg-amber-500 border-2 border-white duration-300 hover:border-2 hover:border-black' onClick={()=> setTambahNotaBarang(true)}>
                        Tambahkan Barang
                    </button>
                </div>

                {/* Rincian Barang */}
                <div className='mt-3'>
                    <div className="text-3xl font-bold ">
                        Rincian Barang
                    </div>
                    <FormRincianBarang />
                </div>
            </div>
            {tambahNotaBarang && <ModalFormTambahNota closeModal = {setTambahNotaBarang}/> }
        </div>
    )
}

export default FormNota