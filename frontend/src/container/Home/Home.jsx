import React, {Component, Fragment} from'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import LoginForm from '../LoginForm/LoginForm';

class Home extends Component {

    render(){
        return(
            <div>
                    <Routes>
                        <Fragment>
                            <Route path='/' element={<LoginForm/>}/>
                            <Route path='/dashboard' element={<Dashboard/>}/>
                        </Fragment>
                    </Routes>
            </div>
        )
    }
}

export default Home;