import React, { Component } from "react";
import Card from "../Card"

class Cards extends Component {


    render() {
        console.log(this.props);
        if (this.props.cards) {
            let list = this.props.cards.map(card => {
                console.log(card);
                return (
                    <Card card={card} key={card.code} draw={this.props.draw} />
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