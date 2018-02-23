import React from "react";

const Card = (props) => {
    let cards = props.cards.map(card => {
        return (
            <div className="col-md-4" id="card" data={card.code}>
                card
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                <div>{cards}</div>
            </div>
        </div>
    );
}


export default Card;