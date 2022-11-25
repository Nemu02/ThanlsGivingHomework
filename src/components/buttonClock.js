import React, { Component } from "react";

export default class ButtonClock extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: true
        };
    }

    hideClock = () =>{
        this.setState({ currentTime: [], isOpen: false });
    };
    
    showClock = () =>  {
        this.setState({ currentTime: moment().format('MMMM Do YYYY, h:mm:ss a'), isOpen: true });
    };

    render() {
        return(
            <div>
                <div align="center">
                <button onClick={this.hideClock}>Hide Clock</button>
                <button onClick={this.showClock}>Show Clock</button>
                </div>
            </div>
        )
    }
}