import React, { Component } from 'react';

class propertyitem extends Component {

   state = {
        propertytitle: this.props.property.propertytitle,
        propertycontent: this.props.property.propertycontent,
    } 

    handleChange = async(e) => {
        let nextState = {};
        
        nextState[e.target.id] = e.target.value;
        await this.setState(nextState);
        this.props.onUpdate(this.props.id,{
            propertytitle: this.state.propertytitle,
            propertycontent: this.state.propertycontent
        })
    
    }
    
    render() {

        
        return (
            <li className="property_obj">
                <div className="property">
                    <input className="property_title" id="propertytitle"placeholder="Property" value={this.state.propertytitle} onChange={this.handleChange}></input>
                    <input className="property_content" id="propertycontent"placeholder="Empty" value={this.state.propertycontent} onChange={this.handleChange}></input>
                    <button className="property_remove" onClick={(e) => {
                            e.stopPropagation();
                            this.props.onRemove(this.props.id)}}>&times;</button>
                    
                </div>                               
            </li>
        );
    }
}

export default propertyitem;