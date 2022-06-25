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
                    <div class="table w-full border-b-2 border-slate-400">
                        <div class="table-header-group ...">
                            <div class="table-row bg-slate-200 font-bold ">
                                <div class="table-cell text-left py-2 px-2 border-y-2 border-slate-400 ">Barang/Jasa</div>
                                <div class="table-cell text-left border-y-2 border-slate-400">Deskripsi</div>
                                <div class="table-cell text-left border-y-2 border-slate-400">Harga</div>
                                <div class="table-cell text-left border-y-2 border-slate-400">Banyak</div>
                                <div class="table-cell text-left border-y-2 border-slate-400">Total</div>
                            </div>
                        </div>
                        <div class="table-row-group">
                            <div class="table-row">
                                <div class="table-cell ">
                                    <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-4 rounded-lg w-11/12'/>
                                </div>
                                <div class="table-cell ...">
                                    <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                                </div>
                                <div class="table-cell ...">
                                    <input type="number" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                                </div>
                                <div class="table-cell ...">
                                    <input type="number" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                                </div>
                                <div class="table-cell ...">
                                    <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-full mb-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            


        </div>
    )
}

export default FormNota