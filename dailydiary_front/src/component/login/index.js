import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import { signup, login, logincheck } from '../action';
import axios from 'axios'
import {Redirect} from 'react-router-dom';
class index extends Component {

    constructor(props){
        super(props);

        this.state = {
            usercode : '',
            email : '',
            gotomain : false
           
        }
    }

    handleChange = (e) => {
     
        let newstate = {};
        newstate[e.target.id] = e.target.value;
        this.setState(newstate)
        
    
    }

    signup_btn = async e =>{

        if(this.state.email === ""){
            return;
        }
       
        await this.props.signup(this.state.email)

        await axios.post("http://localhost:8080/user/signup",this.props.user
        )
        .then( response => { 
            alert("유저코드는 "+this.props.user.usercode); console.log(response)
            this.setState({email : '', usercode : this.props.user.usercode}) })
        .catch( response => { 
            alert("Failed");console.log(response) } );
  
    }

    login_btn = async e => {

        if(this.state.usercode === ""){
            return;
        }
    
        await this.props.login(this.state.usercode)
        await axios.get(`http://localhost:8080/user/login/${this.props.user.usercode}`)
        .then( response => { 

            this.props.logincheck(this.state.usercode)
            
            //alert("hi : "+this.props.loginuser.usercode)
            this.setState({gotomain : true});
                
        })
        .catch( response => { 
            console.log(response)
            alert(this.state.usercode+"는 존재하지 않는 코드입니다.") } );
        

    }

   

    render() {
        if(this.state.gotomain===true){
            return (<Redirect to="/" />)
        }
        return (
            <div id="userpage_wrap">
                <div id="login_wrap">
                    <div className="login_title_wrap">
                        <h2>Login</h2>
                    </div>
                    <div className="login_action_wrap">
                        
                        <input id="usercode" placeholder="UserCode" value={this.state.usercode} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="login_action_button_wrap">
                        <button onClick={this.login_btn}>Login</button>
                    </div>
                </div>

                <div id="signup_wrap">
                    <div className="login_title_wrap">
                        <h2>Join</h2>
                    </div>

                    <div className="login_action_wrap">
                        
                        <input  id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>  
                        
                    </div>
                   
                   
                    <div className="login_action_button_wrap">
                        <button onClick={this.signup_btn}>Join</button>
                    </div>
                </div>

                
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
 
    return{
      user : state.user,
      loginuser : state.loginuser
    }
  }

  let mapDispatchToProps = (dispatch) =>{
      return{
        signup : (email) => dispatch(signup(email)),
        login : (usercode) => dispatch(login(usercode)),
        logincheck : (usercode) => dispatch(logincheck(usercode))

      } 
  }



export default connect(mapStateToProps,mapDispatchToProps)(index);