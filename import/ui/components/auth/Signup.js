
import React, {Component} from "react"
import { render } from "react-dom"
import {Meteor} from "meteor/meteor"
import { FlowHelpers} from "../FRHelpers"



export default class Signup extends Component {
    constructor(){
        super();
    }
    handleLogin(e) {
        e.preventDefault();
        const name = this.refs.name,
            email = this.refs.email.value,
            password = this.refs.password.value,
            password2 = this.refs.password2.value;
        if(password != password2){
            throw Meteor.ERROR("Passwords Don't match")
        }
        else {
            Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ')[1]
                }
            });
        }

    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleLogin.bind(this)}>
                    <input type="text" ref="email" placeholder="Name" />
                    <input type="text" ref="email" placeholder="Email" />
                    <input type="password" ref="password" placeholder="Password"/>
                    <input type="password" ref="password2" placeholder="Confirm Password"/>
                    <button>SignUp</button>
                    <div>Already have an account? <a href={FlowHelpers.pathFor("Login")}>Login</a></div>
                </form>

            </div>
        )
    }
}

