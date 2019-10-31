import React, { Component } from 'react';

import Calendar from 'react-calendar'

import './style.scss'
class index extends Component {
    render() {
        return (
            <div id="main_wrap">
               

                <div id="menu_bar_wrap">
                    
                </div>

                <div id="action_bar_wrap">
                    <Calendar />

                    <div id="diary_wrap">
                        <textarea>gdg</textarea>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default index;