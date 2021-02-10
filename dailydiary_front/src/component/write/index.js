import React, { Component } from 'react';
import Propertylist from './categoryitems/propertylist'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import './style.scss'
import {connect} from 'react-redux'
class index extends Component {

    id = 8; 
    count = 8;
    user = this.props.user.usercode;
    
    todaycode = moment(new Date()).format('YYYYMMDD')
    state = {
        iswrite : false,
        diary_list : [
            { id: 0 ,
                propertytitle : '날씨',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 1 ,
                propertytitle : '지출',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 2 ,
                propertytitle : '아침',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 3 ,
                propertytitle : '점심',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 4 ,
                propertytitle : '저녁',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 5 ,
                propertytitle : '커밋',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            },
            { id: 6 ,
                propertytitle : '한 일',
                propertycontent : '',
                today :this.todaycode,
                usercode : this.user
            },
            { id: 7 ,
                propertytitle : '평가',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            }
        ],
    }

    onUpdate = (id,data) =>{
        let property_ls = this.state.diary_list;

        this.setState({
            diary_list : property_ls.map(
                property => id === property.id ? { ...property, ...data} : property
            )
        })
    }

    onCreatehandler = () =>{
        const ppls = this.state.diary_list;
        this.setState({
            diary_list: ppls.concat({
                id: this.id++,
                propertytitle : '',
                propertycontent : '',
                today : this.todaycode,
                usercode : this.user
            }),
           
        });

        this.count =  this.count + 1
        
        
    }

    onRemove = (id) =>{

        const ppls = this.state.diary_list;

        if(this.count > 1){
            this.setState({
                diary_list : ppls.filter(ppls=> ppls.id !== id),
               
                
            });

            this.count = this.count - 1
        }
        else{
            alert("at least one collection!");
            return;
        }
        
    }
    
    write_diary = async e =>{
        for(let i = 0 ; i < this.count ; i++){
            if(this.state.diary_list[i].propertytitle === '' || this.state.diary_list[i].propertycontent === ''){
                alert("blank?");
                return;
            }

        }

        console.log(this.state.diary_list)

        await axios.post("http://localhost:8080/diary/add",this.state.diary_list
            
        )
        .then( response => { 
            alert("Successful"); console.log(response) 
            this.setState({iswrite : true})    
        } )
        .catch( response => { 
            alert("Failed");console.log(response) } );
        
        
         console.log(this.state.diary_list)
    }

    render() {
        if(this.user === ''){
            return <Redirect to='/login' />
        }

        if(this.state.iswrite){
            return <Redirect to='/' />
        }
        return (
            <div id="diary_wrap">
                    <header id="diary_header">
                        <h1 id="diary_header_h1">{moment(new Date()).format('YYYY[년] MM[월] DD[일]')}</h1>
                    </header>

                    <section id="diary_action">

                        <button id="property_add_btn" onClick={this.onCreatehandler}>+ Add a Category</button>
                        <Propertylist items={this.state.diary_list} onRemove={this.onRemove} onUpdate={this.onUpdate}/>
                    
                    </section>

                    <footer id="diary_footer">
                        <button id="diary_add" onClick={this.write_diary}>+</button>
                    </footer>
 
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