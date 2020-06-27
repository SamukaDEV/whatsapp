import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import ChatList from './ChatList'

// Styles
import '../styles/bootstrap-material-design.min.css'
import '../styles/material-icons.css'
import './MSGr.css'

export default class MSGr extends React.Component {
    render() {
        return (
            <div className="_back">
                <div className="container-fluid" id="main-container">
                    <div className="row h-100">
                        <div className="col-12 col-sm-5 col-md-3 d-flex flex-column" id="chat-list-area" style={{ position: 'realtive' }}>
                            <Navbar />
                            <ChatList />
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}