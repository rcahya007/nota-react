import React from "react";
import { Component } from "react/cjs/react.production.min";
import ContentDashboard from "../../component/ContentDashboard/ContentDashboard";
import Navigation from "../../component/Navigation/Navigation";

class Dashboard extends Component{
    render(){
        return(
            <div>
                <title>DASHBOARD | Kodehack</title>
                <Navigation />
                <ContentDashboard />
            </div>
        )
    }
}

export default Dashboard;