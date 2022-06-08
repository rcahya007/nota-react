import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../component/Navigation/Navigation';
import { AuthContext } from '../Home/Home';

const Barang = () => {
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

    return (
        <div>
            <Navigation/>
            <title>BARANG | Kodehack</title>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-7 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">SEMUA BARANG</h1>

                </div>
            </section>
        </div>
    )
}

export default Barang