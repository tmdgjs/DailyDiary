import React, { Component } from 'react';

import Calendar from 'react-calendar'

import Propertylist from './categoryitems/propertylist'

import moment from 'moment'

import './style.scss'


class index extends Component {

    id= 1;
    count = 1;
    
    state = {
        date : new Date(),
        propertyls : [
            { id: 0 ,
                p_title : 'd안녕',
                p_content : 'gd'
            }
        ],
    }

    onDateChange = date => {
        this.setState({ date })
        
        
    };

    handleChange = (e) => {
        let nextState = {};
        
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    handleChange = (id,data) =>{
        let ppls = this.state.propertyls;

        this.setState({
            propertyls : ppls.map(
                pp => id === pp.id ? { ...pp, ...data} : pp
            )
        })
    }


    onCreatehandler = () =>{
        const ppls = this.state.propertyls;
        this.setState({
            propertyls: ppls.concat({
                id: this.id++,
                p_title : '',
                p_content : ''
            }),
           
        });

        this.count =  this.count + 1
        console.log(this.count)
        
    }

    onRemove = (id) =>{

        const ppls = this.state.propertyls;

        console.log(this.count)
        if(this.count > 1){
            this.setState({
                propertyls : ppls.filter(ppls=> ppls.id !== id),
               
                
            });

            this.count = this.count - 1
        }
        else{
            alert("at least one collection!");
            return;
        }
        
    }

    onClicks = e =>{
        console.log(this.state.propertyls)
    }


    render() {
        return (
            
            <div id="action_wrap">
                <div id="calendar_wrap">

                    <Calendar value={this.state.date} onChange={this.onDateChange}/>

                </div>

                <div id="diary_wrap">
                    <header id="diary_header">
                        <h1 id="diary_header_h1">{moment(this.state.date).format('YYYY[년] MM[월] DD[일]')}</h1>
                    </header>

                    <section id="diary_action">

                        <button id="property_add_btn" onClick={this.onCreatehandler}>+ Add a Category</button>
                        <Propertylist items={this.state.propertyls} onRemove={this.onRemove} onChange={this.handleChange}/>
                    
                    </section>

                    <footer id="diary_footer">
                        <button id="diary_add" onClick={this.onClicks}>+</button>
                    </footer>
 
                </div>
            </div>
           
        );
    }
}

export default index;