import React from 'react'

import img_avatar from '../imgs/avatar.jpg'

export default class Login extends React.Component {
    render() {
        return (
            <div className="row h-100">
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
                                    onChange={this.props.handleChange} />
                                <input className="form-control mb-3"
                                    type="password"
                                    placeholder="Password"
                                    name="userPassword"
                                    onChange={this.props.handleChange} />

                                <button className="btn btn-block btn-info active mb-3" onClick={this.props.signIn}>Sign In</button>
                                <button className="btn btn-block btn-outline-info btn-primary">Register</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}