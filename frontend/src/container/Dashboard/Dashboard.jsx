import { SearchIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Home/Home";
import ModalFilter from '../../component/ModalFilter/ModalFilter'
import Navigation from "../../component/Navigation/Navigation";

const Dashboard = () => {

    const {state} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(state);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

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
                            <div className="h-full bg-gray-100 p-8 rounded flex">
                                <div>
                                    <p className="text-4xl">Rp. 5.000.000</p>
                                    <h3>Dari 3 Transaksi Pemasukan</h3>
                                </div>
                                <div className="">
                                    <p className="text-4xl">Rp. 5.000.000</p>
                                    <h3>Dari 3 Transaksi Pemasukan</h3>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 m-6">
                            <div className="h-full bg-gray-100 p-8 rounded">
                            <h1>Anjas</h1>
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