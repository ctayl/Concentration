import React, { Component } from "react";
import API from "../../utils/API";
import Cards from "../Cards";

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

    draw = cardData => {
        console.log(cardData.code);
        API.draw(this.state.deckId, cardData.code).then(res => API.shuffle(this.state.deckId)).catch(err => console.log(err));
    };

    all = (e) => {
        API.all(this.state.deckId).then(res => {
            console.log(res);
            this.setState({
                deckId: res.data.deck_id,
                cardsRemaining: res.data.remaining,
                cards: res.data.cards
            });
            console.log(this.state);
        });
    }

    render = () => (
        <div>
            <button onClick={this.all}>Draw</button> 
            <Cards cards={this.state.cards} draw={this.draw}/>
        </div>
    )
}

export default Game;