import React, { Component } from "react";
import Card from "../Card"

class Cards extends Component {

    render() {
        if (this.props.cards) {
            let list = this.props.cards.map(card => {
                return (
                    <Card card={card} key={card.code} draw={this.props.draw} cardHandler={this.props.cardHandler} />
                )
            });
            return (
                <div className="container">
                    <div className="row">
                        {list}
                    </div>
                </div>
            );
        } else {
            return <div />
        }
    }

}


export default Cards;