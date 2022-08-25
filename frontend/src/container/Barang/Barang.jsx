import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalEditBarang from '../../component/ModalEditBarang/ModalEditBarang';
import ModalDetailBarang from '../../component/ModalDetailBarang/ModalDetailBarang';
import Navigation from '../../component/Navigation/Navigation';
import { AuthContext } from '../Home/Home';
import { PlusIcon } from '@heroicons/react/solid';
import ModalCreateBarang from '../../component/ModalCreateBarang/ModalCreateBarang';

const Barang = () => {
    const {state} = useContext(AuthContext);
    const [allBarang, setAllBarang] = useState([]);
    const [dataBarang, setDataBarang] = useState([]);
    const navigate = useNavigate();
    const [detailModal, setDetailModal] = useState(false);
    const [editBarang, setEditBarang] = useState(false);
    const [tambahBarang, setTambahBarang] = useState(false);

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

    useEffect(()=>{
        if(tambahBarang === false || editBarang === false ){
            getDataBarang();
        }
    },[tambahBarang,editBarang])

    const getDataBarang = async ()=>{
        const respon = await axios.get('http://benotareact.rendycahyae.my.id/barang');
        setAllBarang(respon.data.DataBarang)
    }

    const handleDetail = (id) => async () =>{
        const getId = await axios.get('http://benotareact.rendycahyae.my.id/barang/'+id)
        setDataBarang(getId.data.results[0])
        setDetailModal(true)
    }

    const handleDelete = (id) => async () =>{
        try {
            await axios.delete('http://benotareact.rendycahyae.my.id/barang/'+id)
            getDataBarang();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navigation/>
            <title>BARANG | Kodehack</title>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-7 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">SEMUA BARANG</h1>
                    <div className='float-right mb-5'>
                        <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2 font-bold text-lg items-center" onClick={() => setTambahBarang(true)}><PlusIcon className="w-6 h-6 mr-2"/>Tambah Barang</button>
                    </div>
                    <table className="w-full min-w-min">
                        <thead className='text-left bg-slate-200'>
                            <tr>
                                <th className='p-4 xl:w-1/2 md:w-1/2 sm:w-1/2 '>Nama Barang</th>
                                <th className='text-center'>Stok Barang</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBarang.map((hasil,index)=>(
                                    <tr key={index}>
                                        <td className='p-4 border-b-2 w-1/2 sm:py-1'>{hasil.nama_barang}</td>
                                        <td className='border-b-2 text-center'>{hasil.stok_barang}</td>
                                        <td className='border-b-2 text-center'>
                                            <button className='p-2 text-black border border-black rounded hover:bg-slate-600 hover:text-white hover:duration-300 my-2 mr-1' onClick={handleDetail(hasil.id)}>Detail</button> | 
                                            <button className='p-2 ml-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white hover:duration-300' onClick={handleDelete(hasil.id)} >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            {tambahBarang && <ModalCreateBarang closeModal={setTambahBarang}/>}
            {detailModal && <ModalDetailBarang closeModal={setDetailModal} dataBarang={dataBarang} editBarang ={setEditBarang}/>}
            {editBarang && <ModalEditBarang dataBarang={dataBarang} closeModal={setEditBarang}/>}
        </div>
    )
}

export default Barang