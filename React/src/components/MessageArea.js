import React from 'react'
import img_avatar from '../imgs/avatar.jpg'

export default class MessageArea extends React.Component {
    render() {
        return (
            <div className="d-sm-flex flex-column col-12 col-sm-7 col-md-9 p-0 h-100" id="message-area">
                <div className="d-none w-100 h-100 overlay">

                    <div className="p-5">
                        <h5 className="mb-4">Debug</h5>
                        <div className="row col-12">
                            ViewPort -
							<span className="d-none d-xs-block d-sm-none">xs</span>
                            <span className="d-none d-sm-block d-md-none">sm</span>
                            <span className="d-none d-md-block d-lg-none">md</span>
                            <span className="d-none d-lg-block d-xl-none">lg</span>
                            <span className="d-none d-xl-block">xl</span>
                        </div>
                    </div>

                </div>

                {/* Navbar */}
                <div className="row d-flex flex-row align-items-center p-2 pl-3 m-0 w-100" id="navbar">
                    <div className="d-block d-sm-none">
                        <i className="fas fa-arrow-left p-2 mr-2 text-white" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                    </div>
                    {/* <a href="#"> */}
                    <img src={img_avatar} alt="" className="img-fluid rounded-circle mr-2" id="pic" />
                    {/* </a> */}
                    <div className="d-flex flex-column">
                        <div className="text-white font-weight-bold" id="name">Username</div>
                        <div className="text-white small" id="details">Online</div>
                    </div>
                    <div className="d-flex flex-row align-items-center ml-auto rcm-icons">
                        <div className="dropdown pull-xs-right text-light mr-2">
                            <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="lr1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">more_vert</i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="lr1">
                                <button className="dropdown-item" type="button">Action</button>
                                <button className="dropdown-item" type="button">Another action</button>
                                <button className="dropdown-item disabled" type="button">Disabled action</button>
                                <div className="dropdown-divider"> </div>
                                <button className="dropdown-item">Separated link</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column px-5" id="messages">
                    {/* <span className="btn-group-sm down">
                        <button type="button" className="btn btn-light text-dark bmd-btn-fab">
                            <i className="material-icons">expand_more</i>
                        </button>
                    </span> */}
                    <div className="mx-auto my-2 bg-secondary text-white small py-1 px-2 rounded">
                        {"27/03/2018"}
                    </div>

                    {/* MessageBubble */}
                    <div className="align-self-start p-1 my-1 mx-3 rounded bg-white shadow-sm message-item">
                        <div className="options">
                            <a href="true"><i className="fas fa-angle-down text-muted px-2"></i></a>
                        </div>

                        <div className="small font-weight-bold text-primary">
                            {"+91 98232 63547"}
                        </div>

                        <div className="d-flex flex-row">
                            <div className="body m-1 mr-2">{"anyone online?"}</div>
                            <div className="time ml-auto small text-right flex-shrink-0 align-self-end text-muted" style={{ width: '75px' }}>
                                {"18:20"}
                            </div>
                        </div>
                    </div>
                    {/* MessageBubble */}
                    <div className="align-self-end self p-1 my-1 mx-3 rounded bg-white shadow-sm message-item">
                        <div className="options">
                            <a href="true"><i className="fas fa-angle-down text-muted px-2"></i></a>
                        </div>

                        <div className="small font-weight-bold text-primary">
                            +91 98232 63547
                        </div>

                        <div className="d-flex flex-row">
                            <div className="body m-1 mr-2">anyone online?</div>
                            <div className="time ml-auto small text-right flex-shrink-0 align-self-end text-muted" style={{ width: '75px' }}>
                                18:20
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <form autoComplete="off">
                    <div className="d-flex justify-self-end align-items-center flex-row" id="input-area">
                        <i className="material-icons emojis">sentiment_satisfied_alt</i>
                        <input type="text" name="message" id="input" placeholder="Digite sua mensagem"
                            className="flex-grow-1 border-0 px-3 py-2 my-2 rounded shadow-sm" />
                        <i className="material-icons sender">send</i>
                    </div>
                </form>
            </div>
        )
    }
}