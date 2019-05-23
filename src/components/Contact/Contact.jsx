import React, { Component } from 'react';
import './contact.css';
import Menu from '../Menu/Menu';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import pic from '../../images/wed.jpg';


export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            date: "",
            phone: "",
            description: "",
            time: ""
        }
        this.handleDate = this.handleDate.bind(this);
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    handleDate(date) {
        this.setState({
            date: date
        })
    }

    submit() {
        let body = {
            name: this.state.name,
            date: this.state.date,
            phone: this.state.phone,
            description: this.state.description,
            time: this.state.time
        }
        if(this.state.name.length===0 ){
            alert(" please fill in all of the text boxes")
        } else{
            let promise = axios.post('/api/sendEmail', body)
            promise.then(() => {
                window.location.assign('/#/thanks');
            })
        }
    }


    render() {
        return (
            <div className="contact-main">
                < Menu />
                    <div className="contact-photo-container">
                        <img src={pic} alt="whatever" className="contact-photo" />
                    </div>
                <div className="contact-container">

                    <div className="contact-background">
                        Please feel free to reach out to us
                        if you have any questions or
                        to check availability! We will get
                        back to you as quickly as
                        possible--usually within 24 hours!
                        <br />
                        <br />
                        <a href="mailto:tantoprecords@gmail.com">
                            email us by clicking here
                         </a>
                         <br/>
                         or
                        <br />
                        <a href="tel:1-801-319-0708">call us by clicking here</a>
                        <br />
                        or
                        <br /> dial 801-319-0708
                    </div>
                    <div className="contact-desc">
                    <div className="contact-desc-title">
                        <br/>
                        or                        just send us a message:
                    </div>
                    <div className="contact-inputs">
                        <div className='home-input'>
                            <div className="home-input-name">
                                <div className="home-input-text-name">
                                    Name
                        </div>
                                <input type="text" onChange={(e) => this.handleChange("name", e.target.value)} />
                            </div>
                            <div className="home-input-date">
                                <div className="home-input-text-date">
                                    Date
                        </div>
                                {/* <input type="text"  onChange={(e) => this.handleChange("date", e.target.value)}/> */}
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDate} />
                            </div>
                            <div className="home-input-time">
                                <div className="home-input-text-time">
                                    Time
                        </div>
                                <input type="text" onChange={(e) => this.handleChange("time", e.target.value)} />
                            </div>
                            <div className="home-input-phone">
                                <div className="home-input-text-phone">
                                    Telephone
                        </div>
                                <input type="text" onChange={(e) => this.handleChange("phone", e.target.value)} />
                            </div>
                            <div className="home-input-desc">
                                <div className="home-input-text-desc">
                                    Description
                        </div>
                                <textarea type="" className="home-input-description" onChange={(e) => this.handleChange("description", e.target.value)} />
                            </div>
                        </div>
                        <div className="home-submit"><button className="home-input-submit" onClick={() => this.submit()}>Submit</button></div>

                                    </div>

                    </div>
                </div>
            </div>
        )
    }
}