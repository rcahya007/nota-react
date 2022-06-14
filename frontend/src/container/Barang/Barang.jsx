import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalDetailBarang from '../../component/ModalDetailBarang/ModalDetailBarang';
import Navigation from '../../component/Navigation/Navigation';
import { AuthContext } from '../Home/Home';

const Barang = () => {
    const {state} = useContext(AuthContext);
    const [allBarang, setAllBarang] = useState([]);
    const [dataBarang, setDataBarang] = useState([]);
    const navigate = useNavigate();
    const [detailModal, setDetailModal] = useState(false);

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

    useEffect(()=>{
        const getDataBarang = async ()=>{
            const respon = await axios.get('http://localhost:5000/barang');
            setAllBarang(respon.data.DataBarang)
        }
        getDataBarang()
    },[])

    const handleDetail = (id) => async (e) =>{
        const getId = await axios.get('http://localhost:5000/barang/'+id)
        setDataBarang(getId.data.results[0])
        // console.log(getId.data.results[0])
        setDetailModal(true)
    }

    const handleDelete = (id) => (e) =>{
        console.log(id)
    }

    return (
        <div>
            <Navigation/>
            <title>BARANG | Kodehack</title>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-7 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">SEMUA BARANG</h1>
                    <table className="w-full min-w-min">
                        <thead className='text-left bg-slate-200'>
                            <tr>
                                <th className='p-4 xl:w-1/2 md:w-1/2 '>Nama Barang</th>
                                <th className='text-center'>Stok Barang</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBarang.map((hasil,index)=>(
                                    <tr key={index}>
                                        <td className='p-4 border-b-2 min-w-full sm:py-1'>{hasil.nama_barang}</td>
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
            {detailModal && <ModalDetailBarang closeModal={setDetailModal} dataBarang={dataBarang} />}
        </div>
    )
}

export default Barang