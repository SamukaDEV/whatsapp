import React from 'react'

import img_avatar from '../imgs/avatar.jpg'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.showProfile = this.showProfile.bind(this)
    }
    showProfile() {
        document.querySelector('#profile-settings').style.left = '0'
    }
    render() {
        return (
            <div className="row d-flex align-items-center flex-row" id="navbar">
                <img src={img_avatar} alt="" onClick={this.showProfile} id="display-pic" />
                <div className="ml-2 text-white font-weight-bold" id="username">Username</div>
                <div className="dropdown ml-auto">
                    <button className="btn bmd-btn-icon dropdown-toggle text-light" type="button" id="ex1"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                    </button>
                    <NavbarDropdown />
                </div>
                <div className="nav-item dropdown ml-auto d-none">
                    <button className="nav-link dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons text-light"
                            style={{ fontSize: '28px', position: 'relative', top: '4px' }}>more_vert</i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item">New group</button>
                        <button className="dropdown-item">Profile</button>
                        <button className="dropdown-item">Archived</button>
                        <button className="dropdown-item">Favorits</button>
                        <button className="dropdown-item">Settings</button>
                        <button className="dropdown-item">Log out</button>
                    </div>
                </div>
            </div>
        )
    }
}

class NavbarDropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listItems: [
                {
                    text: 'Action',
                },
                {
                    text: 'Another Action'
                },
                {
                    text: 'Logout'
                }
            ],
        }
    }
    renderItems(){
        if(this.state.listItems.length >=1){
            return this.state.listItems.map((item, index)=>
            <button className="dropdown-item" onClick={item.fn} key={index}>{item.text}</button>
            )
        }else{
            return (
                <button className="dropdown-item disabled">Empty</button>
            )
        }
    }
    render() {
        return (
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ex1">
                {this.renderItems()}
                {/* <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item disabled" type="button">Another action</button>
                <button className="dropdown-item" type="button">Blog SYSGA</button> */}
            </div>
        )
    }
}