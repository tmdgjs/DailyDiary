import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Diary from '../../resource/notepad.png'
import Timer from '../../resource/timer.png'
import Pencil from '../../resource/pencil.png'
import Key from '../../resource/key.png'
import './style.scss'
import {connect} from 'react-redux'

class index extends Component {
    
    logout = e =>{
        window.location.href = '/';
    }
    
    render() {
     
        let user = this.props.user.usercode;
        console.log(user)
        return (
            <div id="menu_bar_wrap">
                <div className="button_wrap">
                { user === '' ?
                    <Link to="/login">
                        <img src={Key} alt="login"/>
                        <span>Login</span>
                    </Link> 
                    :
                    <a href="/#" onClick={this.logout}>
                        <img src={Key} alt="login"/>
                        <span>Logout</span>

                    </a>
                   }

                    <Link to="/">
                        <img src={Diary} alt="diary"/>
                        <span>Diary</span>
                    </Link>

                    <Link to="/write">
                        <img src={Pencil} alt="pencil"/>
                        <span>Write</span>
                    </Link>

                    <Link to="/timer">
                        <img src={Timer} alt="timer"/>
                        <span>Alarm</span>
                    </Link>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
   
    return{
      
      user : state.loginuser
    }
  }

export default connect(mapStateToProps)(index);