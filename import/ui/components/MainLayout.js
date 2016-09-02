import React, { Component } from "react"

import { Meteor } from "meteor/meteor"
import { FlowHelpers} from "./FRHelpers.js";

const handleLogout = () => {
    if(Meteor.userId()){
        Meteor.logout();
    }
};

export default MainLayout = ({content}) => (
    <div className="container">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>

                    </button>
                    <a className="navbar-brand" href="#">Teamo</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href={FlowHelpers.pathFor("Dashboard")}>Dashboard</a></li>

                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Admin</a></li>
                        <li><a href={FlowHelpers.pathFor("Login")} onClick={handleLogout}>{Meteor.userId() ? "Logout" : "Login/Signup"}</a></li>

                    </ul>
                </div>
            </div>
        </nav>

        {content}
    </div>

);