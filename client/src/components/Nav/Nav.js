import React, {Component} from "react";
import "./Nav.css";

class Nav extends Component {

    render = () => (
        <div id="navbar-custom" className="navbar navbar-default">
            <div className="container-fluid">
                <div id="header-custom">
                    <a href="/"><div id="title">Concentration</div></a>
                    <div id="sub-header">A Memory Card Game</div>
                </div>
            </div>  
        </div>
    )
}

export default Nav;