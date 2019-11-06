import React from 'react';

import Propertyitems from './propertyitem'

const propertylist = (props) => {
    return (
        <ul className="propertys_wrap">
            
            {props.items && props.items.map(item => <Propertyitems key={item.id} onChange={props.onChange} id={item.id} ppls={item} onRemove={props.onRemove} />)}  
        </ul>
    );
};

export default propertylist;