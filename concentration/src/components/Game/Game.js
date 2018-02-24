import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";

class Game extends Component {

    state={
        cards: [],
        cardsRemaining: 52
    };

    componentDidMount = () => {
        console.log("mounted");
        API.newDeck().then(res => {
            console.log(res)
            this.setState({
                deckId: res.data.deck_id,
                cards: res.data.cards
            });
            console.log(this.state);
        });
    }

    win = () => {

    }

    draw = (e) => {
        API.draw(this.state.deckId).then(res => {
            console.log(res);
            this.setState({
                deckId: res.data.deck_id,
                cardsRemaining: res.data.remaining
            });
            console.log(this.state);
        });
    }

    render = () => (
        <div>
            <button onClick={this.draw}>Draw</button> 
            <Card cards={this.state.cards} draw={this.draw} />
        </div>
    )
}

export default Game;