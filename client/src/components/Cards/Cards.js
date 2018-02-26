import React, { Component } from "react";
import Card from "../Card"

class Cards extends Component {

    componentDidUpdate = () => {
        this.render();
    }

    render() {
        console.log(this.props.cards);
        if (!this.props.cards) {
            return <div />
        } else {
            let count = -1;
            let list = this.props.cards.map(card => {
                count++;
                return (
                    <Card picked={this.props.picked} card={card} index={count} key={count} draw={this.props.draw} cardHandler={this.props.cardHandler} flip={this.props.flip} />
                )
               
            });
            console.log(list);
            return (
                <div className="container">
                    <div className="row">
                        {list}
                    </div>
                </div>
            );
        }
    }
}


export default Cards;