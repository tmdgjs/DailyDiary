import React from 'react';

const diaryitem = (props) => {
    
    return (
        <li className="diary_wrote_item">
            <div className="diary_wrote_title">{props.diary.propertytitle}</div>
            <div className="diary_wrote_txt">{props.diary.propertycontent}</div>
        </li>
    );
};

export default diaryitem;