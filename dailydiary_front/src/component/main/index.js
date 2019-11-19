import React, { Component } from 'react';

import Calendar from 'react-calendar'
import {Redirect} from 'react-router-dom'
import axios from  'axios'
import Diarylist from './diaryitems/diarylist'
import moment from 'moment'
import {connect} from 'react-redux'

import './style.scss'


class index extends Component {

    id= 6;
    count = 6;
    user = this.props.user.usercode;

    state = {
        date : new Date(),
        today : moment(this.date).format('YYYYMMDD'),
        dump : '',
        diary_list : []
    }

    componentWillMount(){
        this.calldiary(this.state.today, this.user)
    }
    
     calldiary = (today, user)=>{
        axios.get(`http://localhost:8080/diary/${today}/${user}`)
        .then( response => { 
            this.setState({diary_list: response})
        })
        .catch( e => { 
           this.setState({diary_list: []}) 
        }
        );
    }

    onDateChange =  async date => {
        
        if(date == null){
            return;
        }

        let today =  moment(date).format('YYYYMMDD')

        this.setState({ 
            date,
            today
        })

        this.calldiary(today, this.user)
    };

    render() {
        if(this.user === ''){
            return <Redirect to='/login' />
        }
        return (
            
            <div id="action_wrap">
                <div id="calendar_wrap">

                    <Calendar value={this.state.date} onChange={this.onDateChange}/>

                </div>

                <div id="diary_page">
                    <header id="diary_header">
                        <h1 id="diary_header_h1">{moment(this.state.date).format('YYYY[년] MM[월] DD[일]')}</h1>
                    </header>

                    <section id="diary_contents">
                        <div id="diary_wrote_list">
                            
                            <Diarylist items={this.state.diary_list}/>
                            
                        </div>
                    </section>

                    <footer id="diary_footer">
                        '지출 - 한 일' 은 필수
                
                    </footer>
 
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