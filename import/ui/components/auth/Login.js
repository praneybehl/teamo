import React, {Component} from "react"
import { render } from "react-dom"
import {Meteor} from "meteor/meteor"
import { FlowHelpers} from "../FRHelpers"


export default class Login extends Component {
    constructor(){
        super();
    }
    handleSignup(e) {
        e.preventDefault();
        const email = this.refs.email.value,
            password = this.refs.password.value;
        Meteor.loginWithPassword(email, password, ()=>{
            if(Meteor.userId ) {
                console.log("logged In");
                FlowRouter.go("/dashboard");
            }
            else {
                console.log("Something went wrong");
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSignup.bind(this)}>
                    <input type="text" ref="email" placeholder="email" />
                    <input type="password" ref="password" placeholder="password"/>
                    <button>Login</button>
                    <div><a href={FlowHelpers.pathFor("Signup")} >Create Account</a></div>
                </form>

            </div>
        )
    }
}

