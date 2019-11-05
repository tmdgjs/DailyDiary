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
            
            <div id="action_wrap">
                <div id="calendar_wrap">

                    <Calendar value={this.state.date} onChange={this.onDateChange}/>

                </div>

                <div id="diary_wrap">
                    <header id="diary_header">
                        <h1 id="diary_header_h1">{moment(this.state.date).format('YYYY[년] MM[월] DD[일]')}</h1>
                    </header>

                    <section id="diary_action">

                        <button id="property_add_btn">+ Add a Category</button>
                        <ul className="propertys_wrap">
                            <li className="property_obj">
                                <div className="property">
                                    <input className="property_title" placeholder="Property"></input>
                                    <input className="property_content" placeholder="Empty"></input>
                                    <button className="property_remove">&times;</button>
                                </div>                               
                            </li>
                        </ul>
                    </section>



                    
                </div>
            </div>
           
        );
    }
}

export default index;