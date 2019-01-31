import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            ham: true
        }
    }

    hamburger() {
        this.setState({
            ham: !this.state.ham
        })
    };

    render() {
        return (
            <div className="menu-main">
                <div className="menu-container">

                    <div className={this.state.ham? "menu-EQ" : "menu-EQ menu-eq-false" }onClick={() => this.hamburger()}>
                        <div className="menu-bar1"></div>
                        <div className="menu-bar2"></div>
                        <div className="menu-bar3"></div>
                        <div className="menu-bar4"></div>
                        <div className="menu-bar5"></div>
                    </div>
                    <div className="menu-title">Timpview Events</div>
                </div>

                <div className={this.state.ham? "menu-slide" : "menu-slide menu-slide-visible"}>
                <Link to ='/'><div className="menu-home">Home</div></Link>
                <Link to ='/about'><div className="menu-about">About</div></Link>
                <Link to ='/events'><div className="menu-event">Events</div></Link>
                <Link to ='/contact'><div className="menu-contact">Contact</div></Link>

                </div>
                



            </div>
        )
    }
}