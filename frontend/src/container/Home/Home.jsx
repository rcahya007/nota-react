import React, { useEffect } from'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useReducer } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import LoginForm from '../LoginForm/LoginForm';


export const AuthContext = createContext();
const dataLocal = JSON.parse(localStorage.getItem('user'));
console.log(dataLocal)
const initialState = {
    user: dataLocal,
}

const reducer = (state, action) =>{
    switch (action.type){
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return{
                ...initialState,
                user: action.payload.user
            }
        case "LOGOUT":
            localStorage.clear()
            return{
                ...initialState,
                user: null
            }
        default: 
        return state;   

    }
}


const Home = () => {
    const [state, fungsi] = useReducer(reducer, initialState); 
    
        return(
            <div>
                <AuthContext.Provider value={{state, fungsi}}>
                    <Routes>
                            <Route path='/' element={<LoginForm/>}/>
                            <Route path='/dashboard' element={<Dashboard/>}/>
                    </Routes>
                </AuthContext.Provider>
            </div>
        )
}

export default Home;