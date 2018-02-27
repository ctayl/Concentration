import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

    render = () => (
       <div id="wrapper" className="container-fluid">
            <div className="jumbotron">
                <div className="container">
                    <h1>Welcome to Concentration!</h1>
                    <br />
                    <h3>How to play:</h3>
                    <ul>
                        <li>Click a card to flip it over!</li>
                        <li>Click a second card.</li>
                        <li>If your cards are the same number, you win! They are pulled from the deck.</li>
                        <li>If not, they are flipped back over, and you can try again!</li>
                        <li>Click <span className="label label-primary">New Game</span> to begin!</li>
                    </ul>
                    <br />
                    <br />
                    <p><a className="btn btn-primary btn-lg" href="/game" role="button">New Game</a></p>
                </div>
            </div>
       </div>
    )
}

export default Home;