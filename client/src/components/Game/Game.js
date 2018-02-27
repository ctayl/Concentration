import React, { Component } from "react";
import Cards from "../Cards";
import "./Game.css";
import API from "../../utils/API";

class Game extends Component {

    state = {
        cards: [],
        picked: false
    };

    // When the game mounts, get a new game pile
    componentDidMount = () => {
        API.newDeck().then(res => {
            this.setState({
                deckId: res.data.deck_id,
                cards: res.data.piles.game.cards
            });
        });
    }

    // Logic for handling card choices
    cardHandler = card => {
        // First card clicked, add card to picked state
        if (!this.state.picked) {
            this.setState({
                picked: card.code,
                index: card.index
            });
            // Second card clicked
        } else {
            // WIN: If # is the same as card 1
            if (this.state.picked[0] === card.code[0]) {
                // Draw cards from game pile and re render cards
                let cards = `${this.state.picked},${card.code}`;
                API.draw(this.state.deckId, cards)
                    .then(response => API.flip(this.state.deckId)
                        .then(res => {
                            console.log(res);
                            this.setState({
                                cards: []
                            });
                            this.setState({
                                cards: res.data.piles.game.cards,
                                picked: false
                            });
                        })
                        .catch(err => console.log(err)))
                    .catch(err => console.log(err));
                // LOSE: Cards are different numbers
            } else {
                // Use the picked state to flip cards
                setTimeout(() => this.setState({ picked: "reset" }), 1000);
                setTimeout(() => this.setState({ picked: false }), 1100);
            }
        }
    }

    render = () => (
        <div id={"cards"}>
            <Cards picked={this.state.picked} cards={this.state.cards} cardHandler={this.cardHandler} />
        </div>
    )
}

export default Game;