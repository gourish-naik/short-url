import React, { Component } from 'react'
import logo from "../img/logo.svg"
import close from "../img/close.svg"
import menu from "../img/burger-menu.svg"
export default class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            view: true,
        })
    }
    popUp = () => {
        this.setState({ view: !this.state.view })
        if (this.state.view === false) {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";

        }
    }
    render() {
        return (
            <nav id="top">
                <img  src={logo} className="logo" alt="logo" />
                <div className="nav-list">
                    <span><a href="#">Features</a></span>
                    <span><a href="#">Pricing</a></span>
                    <span><a href="#">Resources</a></span>
                </div>
                <div className="nav-btns">
                    <span className="nav-login"><a href="#">Login</a></span>
                    <span className="nav-signup"><a href="#">Sign Up</a></span>
                </div>



                <div className="menu"><img src={this.state.view ? (menu) : (close)} alt="" onClick={this.popUp} />

                    <div className={!this.state.view ? ("hide") : ("hidden")}>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                        <hr />
                        <a href="#">Login</a>
                        <a href="#" className="btn">Sign Up</a>
                    </div>

                </div>
            </nav>
        )
    }
}
