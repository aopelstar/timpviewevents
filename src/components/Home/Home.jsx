import React, { Component } from 'react';
import pic from '../../images/ME.jpg';
import Menu from '../../components/Menu/Menu';
import DatePicker from 'react-datepicker';
import './home.css';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


export default class Home extends Component {
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

    handleChange(key, value){
        this.setState({
            [key]: value
        })
    }

    handleDate(date){
        this.setState({
            date: date
        })
    }

    submit(){
        let body = {
            name: this.state.name,
            date: this.state.date,
            phone: this.state.phone,
            description: this.state.description,
            time: this.state.time
        }
        let promise = axios.post('api/sendEmail', body)
        promise.then( () => {
            window.location.assign('/#/thanks');
        })
    }

    render() {
        return (
            <div className="home-main">
                <Menu />
                <div >
                    <img src={pic} alt="party" className="home-photo" />
                </div>
                <div className='home-text'>
                    Welcome to Timpview Events!  We keep it classy while promoting a fun, exciting atmosphere.  We are the perfect addition to your birthday party, wedding or corporate event.  
                    <br/>
                    Feel free to reach out for a free quote and to check availability:
            </div>
                <div className='home-input'>
                    <div className="home-input-name">
                         <div className="home-input-text-name">
                         Name
                        </div>
                        <input type="text"  onChange={(e) => this.handleChange("name", e.target.value)}/>
                    </div>
                    <div className="home-input-date">
                         <div className="home-input-text-date">
                         Date
                        </div>
                        {/* <input type="text"  onChange={(e) => this.handleChange("date", e.target.value)}/> */}
                        <DatePicker 
                        selected={this.state.date}
                        onChange={this.handleDate}/>
                    </div>
                    <div className="home-input-time">
                         <div className="home-input-text-time">
                         Time
                        </div>
                        <input type="text"  onChange={(e) => this.handleChange("time", e.target.value)}/>
                    </div>
                    <div className="home-input-phone">
                         <div className="home-input-text-phone">
                         Telephone
                        </div>
                        <input type="text" onChange={(e) => this.handleChange("phone", e.target.value)}/>
                    </div>
                    <div className="home-input-desc">
                         <div className="home-input-text-desc">
                         Description
                        </div>
                        <textarea type="" className="home-input-description" onChange = {(e) => this.handleChange("description", e.target.value)}/>
                    </div>
                    <div className="home-submit"><button className="home-input-submit" onClick={() => this.submit()}>Submit</button></div>
                    

                </div>
            </div>
        )
    }

}