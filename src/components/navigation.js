import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
    return (
        <div>
            <h1>
                <div>
                    <NavLink exact to="/">Align</NavLink>
                </div>
                <div>
                    <NavLink exact to="/toggle">Toggle</NavLink>
                </div>
                <div>
                    <NavLink exact to="/counter">Counter</NavLink>
                </div>
                <div>
                    <NavLink exact to="/fontSize">FontSize</NavLink>
                </div>
                <div>
                    <NavLink exact to="/textColorChange">TextColorChange</NavLink>
                </div>
                <div>
                    <NavLink exact to="/timeClock">TimeClock</NavLink>
                </div>
            </h1>
        </div>

        
    )
}