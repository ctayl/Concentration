import axios from 'axios';

export default {

    // Shuffles a new deck, returns cards in game pile
    newDeck: () => axios.get("https://concentration10.herokuapp.com/deck/new"),

    shuffle: deckId => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/shuffle`),

    // Used to read from the current game pile
    flip: deckId => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/pile/game`),

    // Removes cards from game pile
    draw: (deckId, cards) => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/pile/game/draw/${cards}`)
}
