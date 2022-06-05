import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Home/Home';

const Nota = () => {
    const {state} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])
    return (
        <div>
            <title>NOTA TRANSAKSI | Kodehack</title>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-7 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">NOTA TRANSAKSI</h1>

                </div>
            </section>
        </div>
    )
}

export default Nota