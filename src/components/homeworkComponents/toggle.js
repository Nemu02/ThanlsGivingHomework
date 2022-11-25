import React, { Component } from "react";

export default class Toggle extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Toggle 'Off'",
            content: "Hide Me Please!",
            toggleButton: "Click to Hide",
            isOpen: true
        }
    }

    toggleText = () => {
        this.state.isOpen
        ? this.setState({ content: [], isOpen: false}) 
        : this.setState({ content: "Hide Me Please!", isOpen: true}),
        this.state.isOpen
        ? this.setState({ toggleButton: "Click to Show", isOpen: false})
        : this.setState({ toggleButton: "Click to Hide", isOpen: true})
        this.state.isOpen
        ? this.setState({ pageTitle: "Toggle 'On'", isOpen: false})
        : this.setState({ pageTitle: "Toggle 'Off'", isOpen: true})
}
      
    

    // showText = () => {
    //     this.setState({ content: "Hide Me Please!"})
    // }

    render() {
        return(
            <div>
                <h2 align="center">{this.state.pageTitle}</h2>
                <div align="center">
                    <h1>{this.state.content}</h1>
                </div>
                <div align="center">
                    <button onClick={this.toggleText}>{this.state.toggleButton}</button>
                    {/* <button onClick={this.showText}>Click to Show</button> */}
                </div>
            </div>
        )
    }
}