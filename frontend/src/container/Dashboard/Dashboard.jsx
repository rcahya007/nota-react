import { SearchIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Home/Home";
import ModalFilter from '../../component/ModalFilter/ModalFilter'
import Navigation from "../../component/Navigation/Navigation";
import axios from "axios";

const Dashboard = () => {

    const {state} = useContext(AuthContext);
    const navigate = useNavigate()
    // console.log(state);
    const [openModal, setOpenModal] = useState(false);
    const [dataPemasukan, setDataPemasukan] = useState(0);

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

    useEffect(()=>{
        const getData = async () =>{
            const respon = await axios.get('http://localhost:5000/dataPemasukan')
            setDataPemasukan(respon.data)
        }
        getData();
        console.log(getData)
    },[])
    return(
        <div>
            <Navigation/>
            <title>DASHBOARD | Kodehack</title>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-7 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">All Transaksi Kodehack</h1>
                    <div className="float-right flex">
                        <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2"><SearchIcon className="w-6 h-6 mr-2"/>Cari</button>
                        <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2"><SearchIcon className="w-6 h-6 mr-2"/>Cari</button>
                        <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle " onClick={()=>{
                            setOpenModal(true)
                        }}><SearchIcon className="w-6 h-6 mr-2"/>Cari</button>
                    </div>
                    
                    <div className="flex flex-row -m-4 clear-right">
                        <div className="basis-1/2 m-6">
                            <div className="h-full bg-gray-100 p-6 rounded flex">
                                <div>
                                    <p className="text-4xl">
                                        {new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(dataPemasukan.hasilJumlahIn)}
                                    </p>
                                    <h3 className="pt-3">Dari {dataPemasukan.hasilBanyakIn} Transaksi Pemasukan</h3>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 m-6">
                            <div className="h-full bg-gray-100 p-6 rounded flex">
                                <div>
                                    <p className="text-4xl">
                                        {new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(dataPemasukan.hasilJumlahOut)}
                                    </p>
                                    <h3 className="pt-3">Dari {dataPemasukan.hasilBanyakOut} Transaksi Pemasukan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModal && <ModalFilter closeModal  = {setOpenModal}/>}
        </div>
    )
}

export default Dashboard;