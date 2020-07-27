import React from 'react'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils'

export default class Debug extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home'
        }
        this.myRender = this.myRender.bind(this)
        this.rdrPage = this.rdrPage.bind(this)
    }
    rdrPage(page){
        // this.setState({
        //     page: page
        // })
    }
    myRender() {
        switch (this.state.page) {
            case 'home':
                return <div>Content from Home</div>
                break;
            case 'page':
                return <div>Content from Page, the second in the fake router</div>
                break;
            default:
                return <div>Route not found</div>
                break;
        }
    }
    render() {
        return (
            <div>
                <button>Home</button>
                <button onClick={this.rdrPage('page')}>Page</button>
                <button onClick={this.rdrPage('other')}>404</button>
                <div> 
                    {this.myRender()}
                </div>
            </div>
        )
    }
}