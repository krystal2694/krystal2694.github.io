import React, { Component } from 'react';

function Icon(props) {
        return(
            <a href={props.linkURL}>
                <img src={props.imagePath} className="icon"  alt={"icon"}/>
            </a>
        );
}

export default Icon;