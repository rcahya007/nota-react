import React, { useContext, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Navigation from '../../component/Navigation/Navigation';
import { AuthContext } from '../Home/Home';

const FormNota = () => {
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();

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
                    <div className="text-2xl font-bold float-left">
                        Form Barang
                    </div>
                    <button className='text-xl float-right bg-white p-2 rounded-xl border-2 border-black hover:bg-slate-800 hover:text-white duration-300 mb-3'>
                            Lihat Semua Nota Transaksi
                    </button>
                </div>
                <div className='clear-both'>
                    {/* table Kosong */}
                    <table className='w-full'>
                        <th className='text-left bg-slate-200 p-3'>
                            <td className='w-1/4'>Barang/jasa</td>
                            <td className='w-1/4'>Deskripsi</td>
                            <td className='w-1/4'>Harga</td>
                            <td className='w-1/4'>Banyak</td>
                            <td className='w-1/4'>Total</td>
                        </th>
                        <tr>
                            <td><input type="text" className='mx-auto mt-4 w-1/5 just border-2 border border-slate-800 rounded-lg bg-slate-200' disabled/></td>
                        </tr>
                        <tr>
                            <td><input type="text" className='mx-auto mt-4 w-1/5 just border-2 border border-slate-800 rounded-lg bg-slate-200' disabled/></td>
                        </tr>
                    </table>
                </div>
                
            </div>

            


        </div>
    )
}

export default FormNota