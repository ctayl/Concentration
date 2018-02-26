import React, { Component } from "react";
import API from "../../utils/API";
import Cards from "../Cards";

class Game extends Component {

    state = {
        cards: [],
        picked: false,
        cardsRemaining: 52
    };

    componentDidMount = () => {
        console.log(this.children);
        API.newDeck().then(res => {
            console.log(res)
            this.setState({
                deckId: res.data.deck_id,
                cards: res.data.piles.game.cards
            });
            console.log(this.state);
        });
    }

    flip = (card) => {
        console.log(card)
    }

    componentDidUpdate = () => {
        console.log("update");
    }

    // Used to manage the cards being picked
    cardHandler = card => {
        console.log(this.state.picked);
        if (!this.state.picked) {
            console.log("test");
            this.setState({
                picked: card.code,
                index: card.index
            });
        } else {
            if (this.state.picked[0] === card.code[0]) {
                console.log("win!");
                let cards = `${this.state.picked},${card.code}`;
                API.draw(this.state.deckId, cards)
                    .then(response => API.flip(this.state.deckId)
                        .then(res => {
                            console.log(res);
                            this.setState({
                                cards: res.data.piles.game.cards,
                                picked: false
                            })
                        })
                        .catch(err => console.log(err)))
                    .catch(err => console.log(err));
            } else {
                setTimeout(() => {
                    console.log(this);
                    this.setState({picked: "reset"})
                }, 1000);
                setTimeout(() => this.setState({ picked: false }), 1100);
            }
        }
    }

    draw = cardData => {
        console.log(cardData.code);
        API.draw(this.state.deckId, cardData.code).then(res => console.log(res));
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
            {console.log(this.state)}
            <Cards picked={this.state.picked} cards={this.state.cards} draw={this.draw} cardHandler={this.cardHandler} flip={this.flip} />
        </div>
    )
}

export default Game;