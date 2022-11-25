import React, { Component } from "react";
import moment from "moment";
import randomColor from "randomcolor";

export default class TimeClock extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Time Clock",
            currentDate: moment().format('MMMM do YYYY'),
            currentTime: moment().format('h:mm:ss A'),
            isOpen: true
        };
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            console.log("New Chat Message")
            this.setState({ currentTime: moment().format('h:mm:ss A')})
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

    hideClock = () =>{
        this.setState({ currentTime: [], isOpen: false }),
        clearInterval(this.liveTime);
        
    };

    showClock = () =>  {
        this.setState({ currentTime: moment().format('h:mm:ss A'), isOpen: true }),
        this.liveTime = setInterval(() => {
            console.log("New Chat Message")
            this.setState({ currentTime: moment().format('h:mm:ss A')})
        },1000)
    };


    render() {
        return(
            <div>
                <h2 align="center">{this.state.pageTitle}</h2>
                <h4 align="center">{this.state.currentDate}</h4>
                <h3 align="center" style={{ fontSize: 
            "5em", color: randomColor()}}>{this.state.currentTime}</h3>
                <div align="center">
                 <button onClick={this.hideClock}>Hide Clock</button>
                 <button onClick={this.showClock}>Show Clock</button>
                </div>
            </div>
        )
    }
}