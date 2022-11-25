import React, { Component } from "react";

export default class Alignment extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: <h1>"MOve ME!"</h1>,
            btnleft: <h4>Align Left</h4>,
            btncenter: <h4>Align Center</h4>,
            btnright: <h4>Align Right</h4>
        }
    }

    leftPos = () => {
        this.setState({ pageTitle: <h1 style={{ color: "blue"}} align="left">"MOve ME!"</h1>}),
        this.setState({ btnleft: <h4 style={{color: "blue"}}>Align Left</h4>})
        this.setState({ btncenter: <h4 style={{color: "black"}}>Align Center</h4>})
        this.setState({ btnright: <h4 style={{color: "black"}}>Align Right</h4>})
    }
        

    centerPos = () => {
        this.setState({pageTitle: <h1 style={{color: "red"}} align="center">"MOve ME!"</h1>})
        this.setState({ btncenter: <h4 style={{color: "red"}}>Align Center</h4>})
        this.setState({ btnleft: <h4 style={{color: "black"}}>Align Left</h4>})
        this.setState({ btnright: <h4 style={{color: "black"}}>Align Right</h4>})
        
    }

    rightPos = () => {
        this.setState({pageTitle: <h1 style={{color: "green"}} align="right">"MOve ME!"</h1>})
        this.setState({ btnright: <h4 style={{color: "green"}}>Align Right</h4>})
        this.setState({ btncenter: <h4 style={{color: "black"}}>Align Center</h4>})
        this.setState({ btnleft: <h4 style={{color: "black"}}>Align Left</h4>})
    }

    render() {
        return( 
            <div>
                <h1 align="center">{this.state.pageTitle}</h1>

                <div align= "center">
                    
                        <button onClick={this.leftPos}>{this.state.btnleft}</button>

                        <button onClick={this.centerPos}>{this.state.btncenter}</button>

                        <button onClick={this.rightPos}>{this.state.btnright}</button>

                </div>
            </div>
        )
    }
}