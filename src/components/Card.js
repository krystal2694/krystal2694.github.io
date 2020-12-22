import React, { Component } from 'react';
import "../css/Card.scss"


function Card(props) {

    return(
        <div className="card-container">
            <div className="header">
                <h2 className="title"><span className='title-dots'> - </span>{props.title} <span className='title-dots'> - </span></h2>
            </div>
                <div className="content">{props.content}</div>
        </div>
    );
}

export default Card;