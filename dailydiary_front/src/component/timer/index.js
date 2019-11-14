import React, { Component } from 'react';

import './style.scss'
class index extends Component {


    

    constructor(props){
        super(props);

        this.state = {
            authority : false,
            hour : '',
            min : ''
        }

        this.alert_permission = this.alert_permission.bind(this);
        
    }

    
    alert_permission = async(e) => {
        
        
            if(await this.permission() === 'no'){
                alert("gd")
                return;
            }

            else{
               
                this.setState({
                    authority : true
                });
            }
    }

    timeonChange = e =>{
        const re = /^[0-9\b]+$/; 
        let newState =  {};
        if(e.target.value === '' || re.test(e.target.value)) { 
        
            switch(e.target.id){
                case 'hour' :
                    if(e.target.value > 23){
                        alert("최대 23시간까지 설정 가능합니다.")
                        return;
                    }
                    break;
                case 'min':
                    if(e.target.value > 59){
                        alert("분은 최대 59분까지 있습니다.")
                       return;
                    }
                    break;

                default :
                    break;

            }

            newState[e.target.id] = e.target.value;
            this.setState(newState)
        }
        
    }



    permission=async ()=>{
        let rs= await Notification.requestPermission();
        console.log(rs);
        if(rs === 'denied' || rs === 'default'){
            return "no";
        }
        else{
            return "ok";
        } 
    }

    permission_success_onclick = e =>{

        if(this.state.hour === '' || this.state.min === ''){
            alert("error")
            return;
        }
        
        let options = {
            body : "알람입니다",
            icon: "https://github.com/tmdgjs/DailyDiary/blob/master/dailydiary_front/src/resource/timer.png?raw=true"
        }

        
        let hour_m = this.state.hour * 1000 * 360;
        let min_m = this.state.min * 1000 * 60;

        alert("알람이 설정되었습니다.")
        setTimeout(function(){
            let noti = new Notification("Alarm",options);
            setTimeout(function () {
                noti.close();
            }, 5000);
        },hour_m + min_m); 

        //promise 쓸것

           
            
        }
    
   
    render() {
        return (
            <div id="timer_wrap">
                <span>

                    <button id="permission_ckbtn" onClick={this.alert_permission}>권한 체크</button>
                </span>
                <div id="timer_header">
                    <h1>언제 알려드릴까요?</h1>
                    
                </div>

                <div id="timer_action_wrap">

                   <div id="timer_action_input_wrap">
                                
                        <input id="hour" placeholder="시" value={this.state.hour} onChange={this.timeonChange}></input>
                        <input id="min" placeholder="분" value={this.state.min} onChange={this.timeonChange}></input>
                        
                    </div>
                    <div id="timer_action_button_wrap">
                        {
                            
                            this.state.authority === false ? 
                            
                            ""
                            :<button onClick={this.permission_success_onclick}>시작</button>
                    
                        }
                    </div>
                </div>

                
                
            </div>
        );
    }
}

export default index;