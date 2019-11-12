import React from 'react';
import Diaryitem from './diaryitem'

const diarylist = (props) => {
   
    return (
        <ul id="diary_wrote_ul">
            {props.items.data && props.items.data.map(item => <Diaryitem key={item.id} id={item.id} diary={item}/>)}
            
        </ul>
        
    );
};

export default diarylist;