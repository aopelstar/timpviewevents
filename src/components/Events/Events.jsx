import React from 'react';
import './events.css';
import Menu from '../Menu/Menu'


export default function Event() {
    return (
        <div className="event-main">
            <Menu />
            <div className="event-text">
                <div className="event-text-container">

                    <div className="event-header">Weddings</div>
                    <div className="event-header-text">With well over one hundred weddings of experience, believe us when we say that we have you covered.
                    We'll be your wedding DJ and then some.
                        We come prepared with dual wireless microphones, music that caters to your tastes and we'll MC the event in a way that does not take any of the attention off of you and your big day.
                        We'll take care of the big stuff and ensure your special day is perfect.

                    </div>
                </div>
                <div className="event-text-container">
                    <div className="event-header">Parties</div>
                    <div className="event-header-text">
                    Let us make your house party into a real banger.  We will bring lights, music and an energy that only seems to exist in movies.  Your party doesn't start until Timpview Events arrives.</div>
                </div>
                <div className="event-text-container">
                    <div className="event-header">Corporate Events</div>
                    <div className="event-header-text">
                    Make your event as epic as your business.  We'll bring lighting, music, wireless microphones and everything you need to make sure that your
                    event goes off without a hitch.</div>
                </div>
            </div>
        </div>
    )
}