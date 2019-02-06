import React, { Component } from 'react';
import Casey from '../../images/kc.jpg';
import Andre from '../../images/aj.jpg';
import Menu from '../../components/Menu/Menu';
import './about.css';

export default class About extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="about-main">
                < Menu />
                <div className="about-photos">
                    <div className="about-AJK">
                        <img src={Andre} alt="AJK casual" className="about-photo"/>
                    </div>
                    <div className="about-photo-text">
                    <div className="about-photo-title">
                        DJAK
                    </div>
                        Born in the heart of a volcano, DJAK has only known
                        greatness and triumph in all of his endeavors.  He has 
                        literally thousands of hours working as an audio visual 
                        professional.  He's an MC, a beat matcher and a mage level
                        three.  He'll take your party up a notch without even breaking
                        a sweat.
                    </div>
                    <div className="about-KC">
                        <img src={Casey} alt="Casey casual" className="about-photo"/>
                    </div>
                    <div className="about-photo-text">
                    <div className="about-photo-title">
                        MCKC
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum laborum rem ex delectus soluta necessitatibus 
                        aperiam autem sunt. Praesentium, tenetur? Est dolores 
                        harum saepe provident ab necessitatibus quod adipisci 
                        dolorum.
                    </div>
                </div>


            </div>
        )
    }
}