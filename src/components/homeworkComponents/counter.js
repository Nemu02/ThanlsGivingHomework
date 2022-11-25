import React, { Component } from "react";
import randomColor from "randomcolor";

// const color = randomColor();

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    increaseCount = () => {
        this.setState({ counter: this.state.counter + 1})
    }

    decreaseCount = () => {
        this.setState({ counter: this.state.counter - 1})
    }

    


    // const increase = () => {
    //     setCounter(count => count + 1);
    //   };

    render() {
        return(
            <div onClick={this.click} style
            ={{ color: randomColor()}} align="center">
                <div >
                    <button onClick={this.increaseCount}>Up</button>
                </div>
                <h1 style={{ fontSize: "20rem"}}>{this.state.counter}</h1>
                <div>
                    <button onClick={this.decreaseCount}>Down</button>
                </div>
            </div>
        )
    }
}