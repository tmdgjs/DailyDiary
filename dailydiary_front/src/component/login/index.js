import React, { Component } from 'react';
import './style.scss'
class index extends Component {

    constructor(props){
        super(props);

        this.state = {
            usercode : '',
            email : ''
           
           
        }
    }

    handleChange = async(e) => {
        let nextState = {};
        
        nextState[e.target.id] = e.target.value;
        await this.setState(nextState);
        
    
    }

    handleClick = e =>{
        const usercode = Math.floor(Math.random() * (99999-11111) + 11111);
        const dummy = Object.assign({},this.state,{usercode : usercode})
        console.log(dummy)
    } 

   

    render() {
        return (
            <div id="userpage_wrap">
                <div id="login_wrap">
                    <div className="login_title_wrap">
                        <h2>login</h2>
                    </div>
                    <div className="login_action_wrap">
                        
                        <input id="usercode" placeholder="USERCODE" value={this.state.usercode} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="login_action_button_wrap">
                        <button>Login</button>
                    </div>
                </div>

                <div id="signup_wrap">
                    <div className="login_title_wrap">
                        <h2>signup</h2>
                    </div>

                    <div className="login_action_wrap">
                        
                        <input  id="email" placeholder="EMAIL" value={this.state.email} onChange={this.handleChange}/>  
                        
                    </div>
                   
                   
                    <div className="login_action_button_wrap">
                        <button>Signup</button>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default index;