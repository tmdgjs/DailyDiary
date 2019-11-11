import React, { Component } from 'react';

import Calendar from 'react-calendar'



import moment from 'moment'

import './style.scss'


class index extends Component {

    id= 6;
    count = 6;

    state = {
        date : new Date(),
        diary_list : [
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

    onDateChange = date => {
        this.setState({ date })
    };

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
                p_title : '',
                p_content : ''
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
    
    write_diary = e =>{
        console.log(this.state.diary_list)
    }


    render() {
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
                            <ul id="diary_wrote_ul">
                                <li className="diary_wrote_item">
                                    <div className="diary_wrote_title">날씨</div>
                                    <div className="diary_wrote_txt">맑음</div>
                                </li>

                            </ul>
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

export default index;