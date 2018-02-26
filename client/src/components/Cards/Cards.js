import React, { Component } from "react";
import Card from "../Card"

class Cards extends Component {

    render() {
        if (this.props.cards) {
            let count = -1;
            let list = this.props.cards.map(card => {
                count++;
                return (
                    <Card picked={this.props.picked} card={card} index={count} key={count} draw={this.props.draw} cardHandler={this.props.cardHandler} flip={this.props.flip} />
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