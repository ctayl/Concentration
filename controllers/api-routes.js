const express = require("express");
const axios = require("axios");

const router = express.Router();

//=============== Deck Management //===============

// New deck
router.get("/new", (req, res) => {
    // Gets a new, shuffled deck
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            // Then, draw all 52 cards from the deck
            axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=52`)
                .then(cards => {
                    // Grab the codes from the cards and build a url to move them into the "game" pile
                    let query = "?cards="
                    for (let i = 0; i < cards.data.cards.length; i++) {
                        query += cards.data.cards[i].code + ",";
                    }
                    // Move cards into "game" pile
                    axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/pile/game/add/${query}`)
                        .then(pile => {
                            axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/pile/game/list`)
                                .then(cards => {
                                    cards.data.piles.game.cards = cards.data.piles.game.cards.map(card => {
                                        card.picked = false;
                                        return card
                                    });
                                    res.json(cards.data)
                                })
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// List all cards in the game pile
router.get("/:deckId/pile/game", (req, res) => {
    axios.get(`https://deckofcardsapi.com/api/deck/${req.params.deckId}/pile/game/list`)
        .then(cards => {
            cards.data.piles.game.cards = cards.data.piles.game.cards.map(card => {
                card.display = "/playing-card-back.png";
                return card
            });
            res.json(cards.data)
        })
        .catch(err => console.log(err));
});

// Remove cards from game pile
router.get("/:deckId/pile/game/draw/:cards", (req, res) => {
    console.log(req.params);
    axios.get(`https://deckofcardsapi.com/api/deck/${req.params.deckId}/pile/game/draw/?cards=${req.params.cards}`)
        .then(cards => res.json(cards.data))
        .catch(err => console.log(err));
});

module.exports = router;