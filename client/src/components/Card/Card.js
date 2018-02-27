import React, { Component } from "react";
import "./Card.css";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: props.card.code,
            image: props.card.image,
            display: "/playing-card-back.png",
            index: props.index,
            picked: false
        };
    };

    componentDidUpdate = () => {
        if (this.props.picked === "reset") {
            if (this.state.display === "/playing-card-back.png") {
                return
            } else {
                this.setState({
                    display: "/playing-card-back.png",
                    picked: false
                })
            }
        }
    }

    pickedHandler = e => {
        if (this.state.picked) {
            return
        }
        this.setState({
            picked: true,
            display: this.state.image
        });
        this.props.cardHandler(this.state);
    };

    render = () => (
        <div className="col-xs-1">
            <div className="panel panel-default">
                <div className={"panel-body"} onClick={this.pickedHandler} data={this.props.card.code} style={{ backgroundImage: `url("${this.state.display}")` }}>

                </div>
            </div>
        </div>
    )
}


export default Card;