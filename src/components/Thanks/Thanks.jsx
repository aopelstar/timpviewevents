import React, { Component } from 'react';
import './thanks.css';
import Menu from '../../components/Menu/Menu';

export default class Thanks extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="thanks-main">
            < Menu />
            <div className="thanks-message">

            Thanks for the message.  We'll get back to 
            you as soon as possible.  We're stoked to get 
            started.
            </div>
            </div>
        )
    }
}