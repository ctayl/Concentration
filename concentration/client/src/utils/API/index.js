import axios from 'axios';

export default {
    
    newDeck: () => axios.get("http://localhost:3001/deck/new"),

    shuffle: deckId => axios.get(`http://localhost:3001/deck/${deckId}/shuffle`),

    flip: deckId => axios.get(`http://localhost:3001/deck/${deckId}/pile/game`),

    draw: (deckId, cards) => axios.get(`http://localhost:3001/deck/${deckId}/pile/game/draw/${cards}`)
}