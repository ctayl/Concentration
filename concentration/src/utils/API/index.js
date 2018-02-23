import axios from 'axios';

export default {
    
    newDeck: () => axios.get("http://localhost:3001/deck/new"),

    draw: (deckId) => axios.get(`http://localhost:3001/deck/${deckId}/draw`)
}