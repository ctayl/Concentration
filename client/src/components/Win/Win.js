import React, { Component } from "react";
import "./Win.css";

class Win extends Component {

    render = () => (
       <div id="wrapper" className="container-fluid">
            <div className="jumbotron">
                <div className="container">
                    <h1>Nice Job!</h1>
                    <br />
                    <h3>You Won!</h3>
                    <br />
                    <br />
                    <p><a className="btn btn-primary btn-lg" href="/game" role="button">New Game</a></p>
                </div>
            </div>
       </div>
    )
}

export default Win;