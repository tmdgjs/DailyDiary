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


    permission(){
        Notification.requestPermission(function (rs) {
            if(rs === 'denied'){
                console.log(rs)
                return "no";
            }

            else{
               
                return "ok";
            } 
        })
    }

    onclicks = e =>{
        
        console.log(this)
    }
    
   
    render() {
        return (
            <div id="timer_wrap">

                <button onClick={this.alert_permission}>authority</button>
                 {
                            this.state.authority === false ? 
                            
                            <button onClick={this.onclicks}>aaaa</button>
                            :<button>bbbb</button>
                }
                
            </div>
        );
    }
}

export default index;