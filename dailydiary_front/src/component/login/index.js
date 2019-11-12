import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import { signup , onChange} from '../action';
import axios from 'axios'
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
        console.log(e)
        //await this.props.update(e)
        
    
    }

    handleClick = e =>{
        const usercode = Math.floor(Math.random() * (99999-11111) + 11111);
        const dummy = Object.assign({},this.state,{usercode : usercode})
        console.log(dummy)
    } 

    signup_btn = async e =>{
       
        /*await this.props.signup(this.state.email)

        await axios.post("http://localhost:8080/user/signup",this.props.user
        )
        .then( response => { 
            alert("Successful"); console.log(response) } )
        .catch( response => { 
            alert("Failed");console.log(response) } );*/

       console.log(this.props.user.email)
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
                        
                        <input  id="email" placeholder="EMAIL" value={this.props.user.email} onChange={this.handleChange}/>  
                        
                    </div>
                   
                   
                    <div className="login_action_button_wrap">
                        <button onClick={this.signup_btn}>Signup</button>
                    </div>
                </div>

                
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
   
    return{
      user : state.user
    }
  }

  let mapDispatchToProps = (dispatch) =>{
      return{
        signup : (email) => dispatch(signup(email)),
        update : e => dispatch(onChange(e))
      } 
  }



export default connect(mapStateToProps,mapDispatchToProps)(index);;