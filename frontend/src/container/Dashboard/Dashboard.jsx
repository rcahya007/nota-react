import { SearchIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Home/Home";
import ModalFilter from '../../component/ModalFilter/ModalFilter'

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
                    
                    <div className="flex f lex-wrap -m-4 clear-right">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                            <h1>Anjas</h1>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
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