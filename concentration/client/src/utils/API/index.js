import axios from 'axios';

export default {
    
    newDeck: () => axios.get("http://localhost:3001/deck/new"),

    shuffle: deckId => axios.get(`http://localhost:3001/deck/${deckId}/shuffle`),

    all: deckId => axios.get(`http://localhost:3001/deck/${deckId}/all`),

    draw: (deckId, code) => axios.get(`http://localhost:3001/deck/${deckId}/draw/${code}`)
}