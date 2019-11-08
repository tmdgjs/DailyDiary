import React from 'react';

import Propertyitems from './propertyitem'

const propertylist = (props) => {
    return (
        <ul className="propertys_wrap">
            
            {props.items && props.items.map(item => <Propertyitems key={item.id} onUpdate={props.onUpdate} id={item.id} property={item} onRemove={props.onRemove} />)}  
        </ul>
    );
};

export default propertylist;