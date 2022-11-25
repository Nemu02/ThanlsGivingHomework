import React from "react";
import { Switch, Route } from "react-router-dom";
import Align from "./homeworkComponents/align";
import Toggle from "./homeworkComponents/toggle";
import Counter from "./homeworkComponents/counter";
import FontSize from "./homeworkComponents/fontSize";
import TextColorChange from "./homeworkComponents/textColorChange";
import TimeClock from "./homeworkComponents/timeClock";

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Align} />
                <Route exact path="/toggle" component={Toggle} />
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/fontSize" component={FontSize} />
                <Route exact path="/textColorChange" component={TextColorChange} />
                <Route exact path="/timeClock" component={TimeClock} />
            </Switch>
        </div>
    )
}