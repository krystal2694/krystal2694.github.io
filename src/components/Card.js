import React, { Component } from 'react';


function Card(props) {

    return(
        <div className="container">
            <div className="title">{props.title}</div>
            <div className="content">{props.content}</div>
        </div>
    );
}

export default Card;