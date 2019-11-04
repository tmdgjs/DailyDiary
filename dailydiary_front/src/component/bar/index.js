import React, { Component } from 'react';
import Diary from '../../resource/diary.svg'
import Timer from '../../resource/timer.svg'
import './style.scss'

class index extends Component {
    render() {
        return (
            <div id="menu_bar_wrap">
                <div className="button_wrap">
                    <img src={Diary} alt="diary"/>
                </div>

                <div className="button_wrap">
                    <img src={Timer} alt="timer"/>
                </div>
            </div>
        );
    }
}

export default index;