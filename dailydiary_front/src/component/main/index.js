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
    diary_list = [];

    state = {
        date : new Date(),
        today : moment(this.date).format('YYYYMMDD'),
       
    }
    
    async componentDidMount(){
        await this.calldiary();
        
    }

    async componentDidUpdate(){
        await this.calldiary();
    }

    async calldiary(){


        await axios.get(`http://localhost:8080/diary/${this.state.today}/${this.user}`)
        .then( response => { 
            this.diary_list = [];
        
            this.diary_list = response;
            console.log(this.diary_list.data)
            
        })
        .catch( response => { 
            this.diary_list = []; } );
    }

    onDateChange =  date => {
        
        this.setState({ 
            date : date,
            today : moment(date).format('YYYYMMDD')
        })
    
    };



    render() {
        console.log(this.props.store)
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
                            <Diarylist items={this.diary_list}/>
                            
                        </div>
                    </section>

                    <footer id="diary_footer">
                    날씨 - 지출 - 음식 - 커밋 - 한 일 - 평가 
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