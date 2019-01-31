import React from 'react';
import './events.css';
import Menu from '../Menu/Menu'


export default function Event() {
    return (
        <div className="event-main">
            <Menu />
            <div className="event-text">
                <div>

                    <div className="event-header">Weddings</div>
                    <div className="event-header-text">With well over one hundred weddings of experience, believe us when we say that we have you covered.
                        We come prepared with dual wireless microphones, music that caters to your tastes and a small microphone
                        that we can hide on your officiant.
                        Let us handle the stress by providing an MC that will clearly direct your wedding exactly how you want it.  We'll take care of the big stuff and ensure your special day is perfect.

                    </div>
                </div>
                <div>
                    <div className="event-header">Parties</div>
                    <div className="event-header-text">
                    Let us make your house party something special.  We will bring lights, and an energy that only seems to exist in movies.</div>
                </div>
                <div>
                    <div className="event-header">Corporate Events</div>
                    <div className="event-header-text">
                    Make your event as epic as your business.  We'll bring lighting, music, wireless microphones and everything you need to make sure that your
                    event goes off without a hitch.</div>
                </div>
            </div>
        </div>
    )
}