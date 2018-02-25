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
        console.log("mounted");
        API.newDeck().then(res => {
            console.log(res)
            this.setState({
                deckId: res.data.deck_id,
                cards: res.data.piles.game.cards
            });
            console.log(this.state);
        });
    }

    win = () => {
    }

    // Used to manage the cards being picked
    cardHandler = card => {
        if (!this.state.picked) {
            this.setState({
                picked: card.code
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
                                cards: res.data.piles.game.cards
                            })
                        })
                        .catch(err => console.log(err)))
                    .catch(err => console.log(err));
            } else {
                setTimeout(() => {
                    // this.setState({
                    //     picked: false,
                    //     cards: new Array(this.state.cards.length)
                    // });
                    API.flip(this.state.deckId)
                        .then(res => {
                            console.log(res);
                            this.setState({
                                cards: res.data.piles.game.cards
                            })
                        })
                        .catch(err => console.log(err))
                }, 1000);
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
            <Cards cards={this.state.cards} draw={this.draw} cardHandler={this.cardHandler} />
        </div>
    )
}

export default Game;