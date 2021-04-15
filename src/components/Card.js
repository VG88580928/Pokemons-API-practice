// import { render } from "@testing-library/react";
import React from 'react';

const Card = ({id, name, height, weight, exp}) => {


    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5 '> 
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt='pokemon' width='200px' height='200px'/>
            <div>
            <p>{`NO.${id}`}</p>
            <h2>{name}</h2>
            <p>{`身高: ${height}    體重: ${weight}`}</p>
            <p>{`經驗值: ${exp}`}</p>
            </div>
        </div>
    );
}


export default Card;