import React from'react';
import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import LoginForm from '../LoginForm/LoginForm';


export const AuthContext = createContext();

const initialState = {
    user: null,
    isAuth: false,
}

const reducer = (state, action) =>{
    switch (action.type){
        case "LOGIN":
            return {
                ...state,
                isAuth: true,
                user: action.payload.user[0]
            }
        case "LOGOUT":
            return {
                ...state,
                isAuth: false,
                user: null,
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