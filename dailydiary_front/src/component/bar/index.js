import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Diary from '../../resource/notepad.png'
import Timer from '../../resource/timer.png'
import './style.scss'

class index extends Component {
    render() {
        return (
            <div id="menu_bar_wrap">
                <div className="button_wrap">
                    <Link to="/"><img src={Diary} alt="diary"/></Link>
                </div>

                <div className="button_wrap">
                    <Link to="/timer"><img src={Timer} alt="timer"/></Link>
                </div>
            </div>
        );
    }
}

export default index;