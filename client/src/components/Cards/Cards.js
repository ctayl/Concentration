import React, { Component } from "react";
import Card from "../Card"

class Cards extends Component {

    render() {
        // If there are cards, assemble and return them
        if (!this.props.cards) {
            return <div />
        } else {
            let count = -1;
            let list = this.props.cards.map(card => {
                count++;
                return (
                    <Card picked={this.props.picked} card={card} index={count} key={count} cardHandler={this.props.cardHandler} />
                )
            });
            return (
                <div className="container-fluid">
                    <div className="row">
                        {list}
                    </div>
                </div>
            );
        }
    }
}

export default Cards;