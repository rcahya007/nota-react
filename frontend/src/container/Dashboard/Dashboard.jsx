import React, {useEffect} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContentDashboard from "../../component/ContentDashboard/ContentDashboard";
import Navigation from "../../component/Navigation/Navigation";
import { AuthContext } from "../Home/Home";

const Dashboard = () => {

    const {state} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(state);

    useEffect(()=>{
        if(state.user == null){
            navigate('/')
        }
    },[state,navigate])

    return(
        <div>
            <title>DASHBOARD | Kodehack</title>
            <Navigation />
            <ContentDashboard />
        </div>
    )
}

export default Dashboard;