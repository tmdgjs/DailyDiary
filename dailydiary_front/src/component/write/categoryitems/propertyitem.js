import React, { Component } from 'react';

class propertyitem extends Component {

    
    constructor(props){
        super(props);
        
    }

   state = {
        p_title: this.props.property.p_title,
        p_content: this.props.property.p_content,
    } 

    handleChange = async(e) => {
        let nextState = {};
        
        nextState[e.target.id] = e.target.value;
        await this.setState(nextState);
        this.props.onUpdate(this.props.id,{
            p_title: this.state.p_title,
            p_content: this.state.p_content
        })
    
    }
    
    render() {

        
        return (
            <li className="property_obj">
                <div className="property">
                    <input className="property_title" id="p_title"placeholder="Property" value={this.state.p_title} onChange={this.handleChange}></input>
                    <input className="property_content" id="p_content"placeholder="Empty" value={this.state.p_content} onChange={this.handleChange}></input>
                    <button className="property_remove" onClick={(e) => {
                            e.stopPropagation();
                            this.props.onRemove(this.props.id)}}>&times;</button>
                    
                </div>                               
            </li>
        );
    }
}

export default propertyitem;