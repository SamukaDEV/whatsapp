import React from 'react'
import img_avatar from '../imgs/avatar.jpg'

export default class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chats: [
                {
                    img: img_avatar,
                    username: 'Beatriz Calcagno',
                    last_message: '<3',
                    time: '12:59',
                    unread: 5
                }
            ]
        }
        this.generateMessageArea = this.generateMessageArea.bind(this)
    }
    generateMessageArea() {

    }
    renderChats() {
        return this.state.chats.map((chat, index) =>{
            let badge;
            if (chat.unread >= 1) {
                badge = <div className="badge badge-success badge-pill small float-right" id="unread-count">{chat.unread}</div>
            }else{
                badge = <div></div>
            }
            return <div key={index} className="chat-list-item d-flex flex-row w-100 p-2 border-bottom "
                onClick={this.generateMessageArea}>
                <img src={chat.img} alt="" className="img-fluid rounded-circle mr-2"
                    style={{ height: '50px' }} />
                <div className="w-100 flex-row">
                    <div className="name">{chat.username}</div>
                    <div className="small last-message">{chat.last_message}</div>
                </div>
                <div>
                    <div className="ml-auto hours">{chat.time}</div>
                    {badge}
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className="row" id="chat-list">
                <div className="col-12 p-0 sub">
                    <div className="w-100 p-2 border-bottom left_search">
                        <input className="form-control" placeholder="Buscar..." id="left_search" />
                    </div>
                    {this.renderChats()}
                    {/* <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread"
                        onClick={"generateMessageArea(this, 1)"}>
                        <img src="images/avatar_1.jpg" alt="" className="img-fluid rounded-circle mr-2"
                            style={{height: '50px'}} />
                        <div className="w-100 flex-row">
                            <div className="name">Programmers</div>
                            <div className="small last-message"> Here we are!</div>
                        </div>
                        <div>
                            <div className="ml-auto hours">00:00</div>
                            <div className="badge badge-success badge-pill small float-right" id="unread-count">2
									</div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}