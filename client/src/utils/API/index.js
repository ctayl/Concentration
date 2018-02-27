import axios from 'axios';

export default {
    
       newDeck: () => axios.get("https://concentration10.herokuapp.com/deck/new"),

       shuffle: deckId => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/shuffle`),

       flip: deckId => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/pile/game`),

       draw: (deckId, cards) => axios.get(`https://concentration10.herokuapp.com/deck/${deckId}/pile/game/draw/${cards}`)
   }


//import axios from 'axios';

//export default {
    
    //newDeck: () => axios.get("http://localhost:3001/deck/new"),

    //shuffle: deckId => axios.get(`http://localhost:3001/deck/${deckId}/shuffle`),

    //flip: deckId => axios.get(`http://localhost:3001/deck/${deckId}/pile/game`),

    //draw: (deckId, cards) => axios.get(`http://localhost:3001/deck/${deckId}/pile/game/draw/${cards}`)
//}
