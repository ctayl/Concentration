const express = require("express");
const axios = require("axios");

const router = express.Router();

// *** Deck Management ***

// New deck
router.get("/new", (req, res) => {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            res.json(response.data);
        })
        .catch(err => console.log(err));
});

// Draws a card
router.get("/:deckId/all", (req, res) => {
    axios.get(`https://deckofcardsapi.com/api/deck/${req.params.deckId}/draw/?count=52`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err));
});

router.get("/:deckId/shuffle", (req, res) => {
    axios.get(`https://deckofcardsapi.com/api/deck/${req.params.deckId}/shuffle`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err));
});

// Draws a card
router.get("/:deckId/draw/:card", (req, res) => {
    axios.get(`https://deckofcardsapi.com/api/deck/${req.params.deckId}/pile/player/add/?cards=${card}`)
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
});

module.exports = router;
