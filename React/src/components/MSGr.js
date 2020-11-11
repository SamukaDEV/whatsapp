import React from 'react'
// import {Router } from '@reach/router'
import { auth } from '../firebase'
import * as io from './socket.io.api'

import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Overlay from './Overlay'
import ChatList from './ChatList'
import MessageArea from './MessageArea'

// Assets
// import img_avatar from '../imgs/avatar.jpg'

// Styles
import '../styles/bootstrap-material-design.min.css'
import '../styles/material-icons.css'
import './MSGr.css'

// import UserContext from '../providers/UserProvider'

export default class MSGr extends React.Component {
    // static contextType = UserContext
    constructor(props) {
        super(props)
        const self = this
        this.state = {
            email: 'absfregs@gmail.com',
            password: '321654987',
            authenticated: localStorage.getItem('authenticated'),
            chats: [],
            user: {},
            currentChat: {}
        }
        try{
        this.state.user = JSON.parse(localStorage['user'])
        }catch(e){
            console.log(e)
        }
        // SocketIO Events
        io.on('auth', function (res) {
            console.log(res)
            localStorage['authenticated'] = res.status
            localStorage['user'] = JSON.stringify(res.user)
            self.setState({
                authenticated: res.status.toString(),
                user: res.user
            })
        })
        io.on('contacts', function (contacts) {
            self.setState({
                contacts: contacts
            })
        })
        io.on('chats', function (chats) {
            console.log('Chats Received', chats)
            self.setState({
                chats: []// chats
            })
        })

        io.on('connect', function () {
            if (localStorage['user'] !== undefined) {
                let user = JSON.parse(localStorage['user'])
                io.emit('request-infos', user.id_user)
            }

        })

        // this.user = useContext(UserContext);
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.signInWithEmail = this.signInWithEmail.bind(this)
        this.LoginHandleChange = this.LoginHandleChange.bind(this)
    }
    LoginHandleChange(e) {
        let nval = {}
        switch (e.target.name) {
            case 'userEmail':
                nval.email = e.target.value
                break;
            case 'userPassword':
                nval.password = e.target.value
                break;
            default:
                return
        }
        this.setState(nval)
    }
    signIn() {
        io.emit('auth', { email: this.state.email, password: this.state.password })
    }
    signOut() {
        localStorage.removeItem('authenticated')
        localStorage.removeItem('user')
        this.setState({
            authenticated: false
        })
    }
    componentDidMount() {

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
            // <UserContext value={this.state}>
            <div className="_back">
                <div className="container-fluid" id="main-container">
                    {
                        this.state.authenticated === "1" ? <div className="row h-100">
                            <div className="col-12 col-sm-5 col-md-3 d-flex flex-column" id="chat-list-area" style={{ position: 'realtive' }}>
                                <Navbar user={this.state.user} signOut={this.signOut} />
                                <ChatList chats={this.state.chats} />
                                <Profile />
                            </div>
                            {/* <MessageArea /> */}
                            {/* <Overlay /> */}
                            {this.state.currentChat === null ? <Overlay /> : <MessageArea />}
                        </div> : <Login signIn={this.signIn} handleChange={this.LoginHandleChange} />
                    }

                    {/* <Login /> */}

                </div>
                <div style={{position: 'absolute', top: '10px', right: '10px'}}>
                    <button className="btn btn-success btn-sm">DEBUG</button>
                </div>
            </div>
            // </UserContext>
        )
    }
}