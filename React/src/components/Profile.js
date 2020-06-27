import React from 'react'
import img_avatar from '../imgs/avatar.jpg'

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.hideProfile = this.hideProfile.bind(this)
    }
    hideProfile() {
        document.querySelector('#profile-settings').style.left = '-210%'
    }
    render() {
        return (
            <div className="d-flex flex-column w-100 h-100" id="profile-settings">
                <div className="row d-flex flex-row align-items-center p-2 m-0"
                    style={{ background: '#3fbbc7', minHeight: '65px' }}>
                    <i className="material-icons cursor-default mr-3 text-light"
                    onClick={this.hideProfile}>arrow_back</i>
                    <div className="text-white font-weight-bold">Perfil</div>
                </div>

                <div className="d-flex flex-column" style={{ overflow: 'auto' }}>
                    <img src={img_avatar} alt=""
                        className="img-fluid rounded-circle my-5 justify-self-center mx-auto" id="profile-pic" />
                    <input type="file" id="profile-pic-input" className="d-none" />
                    <div className="bg-white px-3 py-2">
                        <div className="text-muted mb-2"><label htmlFor="input-name">Your Name</label></div>
                        <input type="text" name="name" id="input-name" className="w-100 border-0 py-2 profile-input"
                            autoComplete="off" />
                    </div>
                    <div className="text-muted p-3 small">
                        This is not your username or pin. This name will be visible to your WhatsApp contacts.
							</div>
                    <div className="bg-white px-3 py-2">
                        <div className="text-muted mb-2"><label htmlFor="input-about">Status</label></div>
                        <input type="text" name="name" id="input-about"
                            className="w-100 border-0 py-2 profile-input" autoComplete="off" />
                    </div>
                </div>
            </div>
        )
    }
}