import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import MainLayout from "../ui/components/MainLayout"

import Login from "../ui/components/auth/Login"
import Signup from "../ui/components/auth/Signup"
import Dashboard from "../ui/components/dashboard/Dashboard"



FlowRouter.route("/", {
    name:"Home",
    triggersEnter: [function(context, redirect) {
        redirect('/login');
    }],
    action: function(_params) {
        throw new Error("this should not get called");
    }
});

FlowRouter.route("/login", {
    name:"Login",
    triggersEnter:[loggedInUser],
    action(params) {
        mount(MainLayout, {
            content: <Login/>
        });
    }
});
FlowRouter.route("/signup", {
    name:"Signup",
    triggersEnter:[loggedInUser],
    action(params) {
        mount(MainLayout, {
            content: <Signup />
        });
    }
});


FlowRouter.route("/dashboard", {
    name:"Dashboard",
    triggersEnter:[ensureSignedIn],
    action(params) {
        mount(MainLayout, {
            content: Dashboard
        });
    }
});

FlowRouter.route("/targets", {
    name:"Dashboard",
    triggersEnter:[ensureSignedIn],
    action(params) {
        mount(MainLayout, {
            content: Dashboard
        });
    }
});


function ensureSignedIn(context, redirect) {
    if(!Meteor.userId() && !Meteor.loggingIn()){
        redirect("login");
    }
    else redirect("/dashboard");
}

function loggedInUser(context, redirect) {
    if(Meteor.userId()){
        redirect("/dashboard");
    }
}