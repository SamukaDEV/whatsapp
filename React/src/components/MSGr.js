import React, { useState, useContext } from 'react'
// import {Router } from '@reach/router'
import { auth } from '../firebase'

import Navbar from './Navbar'
import Profile from './Profile'
import ChatList from './ChatList'
import MessageArea from './MessageArea'

// Assets
import img_avatar from '../imgs/avatar.jpg'

// Styles
import '../styles/bootstrap-material-design.min.css'
import '../styles/material-icons.css'
import './MSGr.css'

import UserContext from '../providers/UserProvider'

export default class MSGr extends React.Component {
    static contextType = UserContext
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        // this.user = useContext(UserContext);
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.signInWithEmail = this.signInWithEmail.bind(this)
    }
    componentDidMount() {
        
        /* perform a side-effect at mount using the value of MyContext */
        console.log(this.context)
    }
    signInWithEmail(event, email, password) {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            // setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        })
    }
    onChangeHandler(event) {
        const { name, value } = event.currentTarget
        if (name === 'userEmail') {
            // this.setEmail(value)
            this.setState({ email: value });
        } else if (name === 'userPassword') {
            this.setState({ password: value });
        }
    }
    render() {
        return (
            <UserContext value={this.state}>
            <div className="_back">
                <div className="container-fluid" id="main-container">
                    <div className="row h-100">
                        {/* <div className="col-12 col-sm-5 col-md-3 d-flex flex-column" id="chat-list-area" style={{ position: 'realtive' }}>
                            <Navbar />
                            <ChatList />
                            <Profile />
                        </div> */}
                        {/* <MessageArea /> */}

                        <div className="col-12 col-sm-5 col-md-3 d-flex flex-column" style={{ background: 'hsl(0, 0%, 87%)' }}></div>
                        <div className="d-sm-flex flex-column col-12 col-sm-7 col-md-9 p-0 h-100" id="message-area">
                            <div className="w-100 h-100 overlay">
                                <div className="row p-5 mt-5">
                                    <div className="col-4 offset-2 text-center">
                                        <img src={img_avatar} alt="" className="border border-secondary mb-3" style={{ borderRadius: '100%' }} />
                                        <input className="form-control mb-3"
                                            placeholder="Email"
                                            autoComplete="off"
                                            autoFocus
                                            name="userEmail"
                                            onChange={this.onChangeHandler} />
                                        <input className="form-control mb-3"
                                            type="password"
                                            placeholder="Password"
                                            name="userPassword"
                                            onChange={this.onChangeHandler} />

                                        <button className="btn btn-block btn-info active mb-3" onClick={(event) => { this.signInWithEmail(event, this.state.email, this.state.password) }}>Sign In</button>
                                        <button className="btn btn-block btn-outline-info btn-primary">Registry</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </UserContext>
        )
    }
}