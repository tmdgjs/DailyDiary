import React, { Component } from 'react';
import Propertylist from './categoryitems/propertylist'

import moment from 'moment'
import './style.scss'
class index extends Component {

    id = 6; 
    count = 6;

    state = {
        today : moment(new Date()).format('YYYYMMDD'),
        propertyls : [
            { id: 0 ,
                p_title : '날씨',
                p_content : ''
            },
            { id: 1 ,
                p_title : '지출',
                p_content : ''
            },
            { id: 2 ,
                p_title : '음식',
                p_content : ''
            },
            { id: 3 ,
                p_title : '커밋',
                p_content : ''
            },
            { id: 4 ,
                p_title : '한 일',
                p_content : ''
            },
            { id: 5 ,
                p_title : '평가',
                p_content : ''
            }
        ],
    }

    onUpdate = (id,data) =>{
        let property_ls = this.state.propertyls;

        this.setState({
            propertyls : property_ls.map(
                property => id === property.id ? { ...property, ...data} : property
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
        
        
    }

    onRemove = (id) =>{

        const ppls = this.state.propertyls;

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
    
    write_diary = e =>{
        console.log(this.state)
    }

    render() {
        return (
            <div id="diary_wrap">
                    <header id="diary_header">
                        <h1 id="diary_header_h1">{moment(new Date()).format('YYYY[년] MM[월] DD[일]')}</h1>
                    </header>

                    <section id="diary_action">

                        <button id="property_add_btn" onClick={this.onCreatehandler}>+ Add a Category</button>
                        <Propertylist items={this.state.propertyls} onRemove={this.onRemove} onUpdate={this.onUpdate}/>
                    
                    </section>

                    <footer id="diary_footer">
                        <button id="diary_add" onClick={this.write_diary}>+</button>
                    </footer>
 
                </div>
        );
    }
}

export default index;