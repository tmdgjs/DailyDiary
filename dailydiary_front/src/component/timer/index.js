import React, { Component } from 'react';

class index extends Component {


    

    constructor(props){
        super(props);

        this.state = {
            authority : false
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
        
        let options = {
            body : "Did you commit today?",
            icon: "https://code.scottshipp.com/wp-content/uploads/2019/05/stickeroid_5bf5475aa0ad1.png"
        }

            let noti = new Notification("Alarm",options);
            setTimeout(function () {
                noti.close();
            }, 5000);
        }
    
   
    render() {
        return (
            <div id="timer_wrap">

                <button onClick={this.alert_permission}>authority</button>
                 {
                            this.state.authority === false ? 
                            
                            <button >aaaa</button>
                            :<button onClick={this.permission_success_onclick}>bbbb</button>
                }
                
            </div>
        );
    }
}

export default index;