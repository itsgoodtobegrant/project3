import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GuessButtons from "../components/guessbuttons";

class App extends Component {
    state = {

    }

buttonTest = () => {
    console.log("This button clicked");
}

render() {
    return (
        <div>
            <GuessButtons
            buttonTest={this.buttonTest0}
            />
        </div>
    )
}

}