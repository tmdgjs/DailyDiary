import React, { Component } from 'react';

import Calendar from 'react-calendar'



import moment from 'moment'

import './style.scss'


class index extends Component {

    state = {
        date : new Date()
    }

    onDateChange = date => {
        this.setState({ date })
        
        
      };
    
    render() {
        return (
            <div id="main_wrap">
               

                <div id="action_wrap">
                    <div id="calendar_wrap">

                        <Calendar value={this.state.date} onChange={this.onDateChange}/>

                    </div>

                    <div id="diary_wrap">
                        <input type="date" value={moment(this.state.date).format('YYYY[-]MM[-]DD')} onChange={this.onDateChange} /> 
                        <textarea id="diary_text" placeholder="Input Text..."></textarea>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default index;