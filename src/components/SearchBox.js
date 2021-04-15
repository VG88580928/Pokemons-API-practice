import React from "react";

const SearchBox = ({searchChange}) => {
    return (
    <div className="pa2">
        <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="卡片查詢" 
        οnfοcus="this.placeholder=''" 
        οnblur="this.placeholder='卡片查詢'"
        onChange={searchChange}
        />
    </div>
    );
}

export default SearchBox;
